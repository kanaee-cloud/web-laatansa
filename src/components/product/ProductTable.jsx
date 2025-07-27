import React from "react";

const ProductTable = ({ data = [], category }) => {
  const filteredProducts = data.filter((item) => item.category === category);

  return (
    <div className="overflow-x-auto w-full">
      <h2 className="text-lg font-semibold mb-4 capitalize mt-4">
        {category} Products
      </h2>
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products available in this category.</p>
      ) : (
        <table className="w-full rounded-xl bg-primary text-sm text-left  dark:border-gray-700">
          <thead className="text-accent">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-gray bg-dark/40 transition-colors duration-200"
              >
                {/* <td className="px-4 py-2 border-b">
                  <img src={product.image} alt={product.name} className="h-12 w-12 object-contain" />
                </td> */}
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">
                  Rp {product.price.toLocaleString("id-ID")}
                </td>
                <td className="px-4 py-2">{product.ket}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductTable;

