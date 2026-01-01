// src/routes/library/+page.server.ts
import { libraryData } from '$lib/constants';

export async function load() {
  console.log('[library] Loading library table of contents');
  console.log('[library] Library object:', JSON.stringify(libraryData, null, 2));
  return { libraryData };
}
