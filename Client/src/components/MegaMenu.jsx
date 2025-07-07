import React, { useEffect, useState } from 'react'

import mockCategories from './Trash/mockCategories';

const MegaMenu = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setCategories(mockCategories);
            setSelectedCategory(mockCategories[0]);
        }, 100);
    }, []);
  return (
    <div className='flex w-full z-50'>
      {/* Left side - Categories */}
      <div className="w-1/3 border-r pr-4 space-y-2">
        {categories.map((cat, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setSelectedCategory(cat)}
              className={`flex items-center px-2 hover:bg-gray-100 cursor-pointer ${
                selectedCategory?.name === cat.name ? 'bg-gray-100' : ''
              }`}
            >
                <img src={cat.image} alt={cat.name} className='w-6 h-6 mr-2' />
                <span>{cat.name}</span>
            </div>
        ))}
      </div>
      
      {/* Right side - Products */}
      <div className="w-2/3 pl-4 grid grid-cols-3 gap-4">
        {selectedCategory?.products?.map((prod, idx) => (
            <div key={idx} className='text-center'>
                <img src={prod.image} alt={prod.name} className='w-full h-20 object-contain mb-2' />
                <p className="text-sm">{prod.name}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
