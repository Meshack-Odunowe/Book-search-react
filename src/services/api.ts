import axios from 'axios';
import { Book } from '../types/book';

const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;
const MAX_RESULTS = 10;

export const fetchBooks = async (query: string, startIndex: number): Promise<{ items: Book[], totalItems: number }> => {
  const searchQuery = query.trim() ? query : 'subject:fiction';
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchQuery)}&key=${API_KEY}&startIndex=${startIndex}&maxResults=${MAX_RESULTS}&orderBy=relevance`;

  try {
    const response = await axios.get<{ items: Book[], totalItems: number }>(url);
    
    if (!response.data.items) {
      return { items: [], totalItems: 0 };
    }

    return {
      items: response.data.items,
      totalItems: response.data.totalItems
    };
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};