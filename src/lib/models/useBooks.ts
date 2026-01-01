// Deprecated: All book fetching is now server-side via +page.server.ts
export const useBooks = () => {
  const getBook = async (_slug: string) => {
    throw new Error('Client-side book fetching is disabled.');
  };
  return { getBook };
};
