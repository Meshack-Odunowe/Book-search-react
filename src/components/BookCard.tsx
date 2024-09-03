import React from 'react';
import { Book as BookIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

// TypeScript interfaces
interface VolumeInfo {
  title: string;
  authors?: string[];
  imageLinks?: {
    thumbnail: string;
  };
  publishedDate?: string;
}

interface Book {
  id: string;
  volumeInfo: VolumeInfo;
}

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => (
  <Link to={`/books/${book.id}`} className="block rounded-md">
    <div className="bg-[#f3f2ee] border border-[#c2b280] rounded-[10px] shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex rounded-md">
        <div className="relative rounded-md h-48 w-1/3">
          {book.volumeInfo.imageLinks ? (
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={`Cover of ${book.volumeInfo.title}`}
              className="h-full w-full object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-[#d8c4a0]">
              <BookIcon size={48} className="text-[#8b7b58]" />
            </div>
          )}
        </div>
        <div className="p-4 w-2/3 bg-[#faf3e0] flex flex-col justify-between rounded-md">
          <div>
            <h3 className="text-lg font-serif font-bold text-[#3e2f1c] mb-2 line-clamp-2">
              {book.volumeInfo.title}
            </h3>
            {book.volumeInfo.authors && (
              <p className="text-sm font-serif text-[#5b4636] mb-2 line-clamp-2">
                By: {book.volumeInfo.authors.join(', ')}
              </p>
            )}
            {book.volumeInfo.publishedDate && (
              <p className="text-sm font-serif text-[#5b4636] mb-4">
                Published: {book.volumeInfo.publishedDate}
              </p>
            )}
          </div>
          <span className="inline-block mt-auto px-4 py-2 bg-[#8b7b58] text-white text-sm w-fit font-semibold rounded-[10px] transition-colors hover:bg-[#6b5a43]">
            View Details
          </span>
        </div>
      </div>
    </div>
  </Link>
);

export default BookCard;