import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch, onSearch }) => (
  <section className="flex items-center rounded-md justify-between mx-auto max-w-3xl gap-8 mb-8">
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search for books..."
      aria-label="Search for books"
      className="flex-grow p-3 border border-[#c2b280] rounded-[10px] bg-[#f5f1e6] focus:outline-none focus:ring-2 focus:ring-[#8b7b58]"
    />
    <button
      onClick={onSearch}
      className="bg-[#8b7b58] text-white p-3 rounded-[10px] hover:bg-[#6b5a43] transition-colors"
      aria-label="Search"
    >
      <Search size={30} />
    </button>
  </section>
);

export default SearchBar;
