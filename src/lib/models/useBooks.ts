export const useBooks = () => {
	const bookFiles = import.meta.glob('../../../books/*.md', { eager: true, as: 'raw' });

	const getBook = (slug: string) => {
		const fileKey = Object.keys(bookFiles).find((key) => key.endsWith(`/${slug}.md`));
		if (!fileKey) throw new Error('Book not found');
		return bookFiles[fileKey] as string;
	};

	return { getBook };
};
