import React from 'react';
import { Search } from 'lucide-react';

const Header = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="bg-primary shadow-sm border-b border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            Katalog Produk
          </h1>

          <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 pr-4 py-2 w-full sm:w-64 bg-primary rounded-xl border border-light/50 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
