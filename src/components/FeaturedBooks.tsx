import React, { useState, useEffect, useCallback } from 'react';
import { Book as BookIcon } from 'lucide-react';
import { fetchBooks } from '../services/api';
import { Book } from '../types/book';
import GoBackButton from './GoBackButton';
import SearchBar from './SearchBar';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
import BookCard from './BookCard';

const FeaturedBooks: React.FC = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState("");

  const loadMoreBooks = useCallback(async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    setError("");

    try {
      const { items, totalItems } = await fetchBooks(search, startIndex);
      
      if (totalItems === 0 || items.length === 0) {
        setError("No books found. Please try a different search term.");
        setBookData([]);
        setHasMore(false);
      } else {
        setBookData(prevData => [...prevData, ...items]);
        setStartIndex(prevIndex => prevIndex + items.length);
        setHasMore(startIndex + items.length < totalItems);
      }
    } catch (err) {
      console.error('Error fetching books:', err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  }, [search, startIndex, isLoading, hasMore]);

  useEffect(() => {
    loadMoreBooks();
  }, []);

  const handleSearch = () => {
    setBookData([]);
    setStartIndex(0);
    setHasMore(true);
    setError("");
    loadMoreBooks();
  };

  const infiniteScrollRef = useInfiniteScroll(loadMoreBooks);

  return (
    <main className="mt-20 px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-serif font-bold text-[#3e2f1c] mb-8 text-center">Discover New Reads</h1>

      <GoBackButton />
      <SearchBar search={search} setSearch={setSearch} onSearch={handleSearch} />
      
      {error && (
        <div className="flex flex-col items-center justify-center mt-8 animate-fade-in">
          <BookIcon size={64} className="text-[#8b7b58] mb-4" />
          <p className="text-xl text-[#3e2f1c] text-center">{error}</p>
        </div>
      )}

      {!error && bookData.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {bookData.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}

      {isLoading && (
        <div className="flex justify-center items-center h-20 mt-8">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#8b7b58]"></div>
        </div>
      )}

      {!hasMore && bookData.length > 0 && !error && (
        <p className="text-center mt-8 text-[#3e2f1c] italic">
          Showing all {bookData.length} books
        </p>
      )}

      {hasMore && !isLoading && (
        <div ref={infiniteScrollRef} className="h-20 mt-8" />
      )}
    </main>
  );
};

export default FeaturedBooks;