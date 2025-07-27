import React from "react";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-primary shadow-xl ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col text-center py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Catalog Product
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto opacity-70 mb-4">
            Temukan berbagai produk menarik yang kami tawarkan. Jelajahi koleksi kami dan temukan apa yang Anda cari.
          </p>
          {/* <div className="relative w-full sm:w-auto mx-auto">
            <div className="flex items-center  rounded-xl bg-accent">
              <Search className="text-gray-400 w-5 h-5 ml-3 mr-3" />
              <input
                type="text"
                placeholder="Cari produk..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-3 pr-4 py-2 w-full sm:w-64 text-primary bg-light rounded-r-xl outline-none"
              />
            </div>
          </div> */}

          <div className="w-24 h-1 bg-gradient-to-r opacity from-accent to-yellow-500 mx-auto mt-6 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
