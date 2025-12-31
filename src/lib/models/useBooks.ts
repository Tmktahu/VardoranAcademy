export const useBooks = () => {
	const getBook = async (slug: string) => {
		const res = await fetch(`/books/${slug}`);
		if (!res.ok) throw new Error('Book not found');
		const book = await res.json();
		return book.content;
	};

	return { getBook };
};
