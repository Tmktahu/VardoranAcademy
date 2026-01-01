import fs from 'fs/promises';
import path from 'path';
import { json, error, redirect, type RequestEvent } from '@sveltejs/kit';

const COOKIE_NAME = 'book_read';

function getUTCDateString(date = new Date()) {
	return date.toISOString().slice(0, 10); // YYYY-MM-DD
}

function getNextUTCMidnight() {
	const now = new Date();
	const next = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1));
	return next;
}

function parseCookie(cookieStr) {
	try {
		return JSON.parse(cookieStr);
	} catch {
		return null;
	}
}

function getLastOctet(ip) {
	if (!ip) return 'unknown';
	const parts = ip.split('.');
	return parts.length === 4 ? parts[3] : ip;
}

async function sendDiscordWebhook({ webhookUrl, timestamp, book, ipLastOctet }) {
	if (!webhookUrl) return;
	try {
		await fetch(webhookUrl, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				content: `Book read: **${book}**\nTime: ${timestamp}\nIP Last Octet: ${ipLastOctet}`
			})
		});
	} catch (e) {
		// Ignore webhook errors
	}
}

export async function load({ params, cookies, request, url, setHeaders, platform }: RequestEvent) {
	const slug = params.slug;
	const today = getUTCDateString();
	const cookie = cookies.get(COOKIE_NAME);
	let cookieData = cookie ? parseCookie(cookie) : null;

	// Check if already read today
	if (cookieData && cookieData.lastRead === today) {
		return {
			alreadyRead: true,
			book: slug,
			message: 'You have already read a book today. Please come back tomorrow.'
		};
	}

	// Load book markdown
	const bookPath = path.join('books', `${slug}.md`);
	let content;
	try {
		content = await fs.readFile(bookPath, 'utf-8');
	} catch {
		throw error(404, 'Book not found');
	}

	// Set cookie to expire at next UTC midnight
	const expires = getNextUTCMidnight();
	cookies.set(COOKIE_NAME, JSON.stringify({ lastRead: today, book: slug }), {
		path: '/books',
		httpOnly: true,
		sameSite: 'lax',
		expires
	});

	// Get IP address (Vercel: x-forwarded-for)
	let ip = request.headers.get('x-forwarded-for') || '';
	if (ip.includes(',')) ip = ip.split(',')[0].trim();
	const ipLastOctet = getLastOctet(ip);

	// Send Discord webhook
	// const webhookUrl = import.meta.env.DISCORD_WEBHOOK_URL;
	// await sendDiscordWebhook({
	// 	webhookUrl,
	// 	timestamp: new Date().toISOString(),
	// 	book: slug,
	// 	ipLastOctet
	// });

	return {
		alreadyRead: false,
		book: slug,
		content
	};
}

export const prerender = false;
