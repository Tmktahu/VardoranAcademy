// src/routes/library/+page.server.ts
import { libraryData } from '$lib/libraryData';

export async function load() {
  return { libraryData };
}
