import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1457372910602944623/R8Tf4PcsQH_8bJRTdwyj5-YZEKR0wcFA7CpnLbXO0uTEqpvXTA-eUixXrwNFtWbvbUFJ';

export const POST: RequestHandler = async ({ request }) => {
  const formData = await request.formData();
  const image = formData.get('image') as File | null;
  const characterName = formData.get('characterName') as string | null;
  const bookTitle = formData.get('bookTitle') as string | null;

  // If missing image or characterName, treat as re-read and do NOT send to Discord
  if (!image || !characterName) {
    return json({ success: true });
  }
  if (!bookTitle) {
    return json({ error: 'Missing required fields' }, { status: 400 });
  }

  // Prepare Discord payload
  const payload = new FormData();
  payload.append('content', `Someone has read **${bookTitle}** as **${characterName}**!`);
  payload.append('file', image, image.name);

  // Send to Discord webhook
  const discordRes = await fetch(DISCORD_WEBHOOK_URL, {
    method: 'POST',
    body: payload,
  });

  if (!discordRes.ok) {
    return json({ error: 'Failed to send to Discord' }, { status: 500 });
  }

  return json({ success: true });
};
