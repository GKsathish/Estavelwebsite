import React from 'react';

const Category = () => {
  const items = [
    {
      image: '/images/stone-01.png',
      title: 'Stone 1',
      price: '$50',
    },
    {
      image: '/images/stone-02.png',
      title: 'Stone 2',
      price: '$60',
    },
    {
      image: '/images/stone-03.png',
      title: 'Stone 3',
      price: '$70',
    },
    {
      image: '/images/stone-04.png',
      title: 'Stone 4',
      price: '$80',
    },
    {
      image: '/images/stone-05.png',
      title: 'Stone 5',
      price: '$90',
    },
    {
      image: '/images/stone-06.png',
      title: 'Stone 6',
      price: '$100',
    }
  ];

  return (
    <section className="category-section p-4">
      <h2 className="text-center text-2xl font-semibold mb-6">Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div key={index} className="image-item">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="text-center mt-3">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-md text-gray-600">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
