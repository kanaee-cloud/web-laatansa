import React from 'react';
import { Search } from 'lucide-react';

const Header = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="bg-primary shadow-sm border-b border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              Katalog Produk
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 pr-4 py-2 bg-primary rounded-xl border border-light/50  outline-none w-64"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;