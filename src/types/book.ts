

// TypeScript interfaces
export interface VolumeInfo {
  title: string;
  authors?: string[];
  imageLinks?: {
    thumbnail: string;
  };
  publishedDate?: string;
}

export interface Book {
  id: string;
  volumeInfo: VolumeInfo;
}

export interface BookCardProps {
  book: Book;
}