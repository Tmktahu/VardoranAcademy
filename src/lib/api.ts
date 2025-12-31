export async function getCurrentUser() {
	const baseUrl = import.meta.env.VITE_API_BASE_URL;
	const res = await fetch(`${baseUrl}/user/me`, {
		method: 'GET',
		credentials: 'include',
		headers: {
			Accept: 'application/json'
		}
	});
	if (!res.ok) throw new Error('Failed to fetch user info');
	return await res.json();
}
