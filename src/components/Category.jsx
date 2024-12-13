import React from 'react';

const Category = () => {
  const items = [
    {
      image: `${process.env.PUBLIC_URL}/Images/stone-01.png`,
      title: 'Stone 1',
      price: '$50',
    },
    {
      image: `${process.env.PUBLIC_URL}/Images/stone-02.png`,
      title: 'Stone 2',
      price: '$60',
    },
    {
      image: `${process.env.PUBLIC_URL}/Images/stone-03.png`,
      title: 'Stone 3',
      price: '$70',
    },
    {
      image: `${process.env.PUBLIC_URL}/Images/stone-04.png`,
      title: 'Stone 4',
      price: '$80',
    },
    {
      image: `${process.env.PUBLIC_URL}/Images/stone-05.png`,
      title: 'Stone 5',
      price: '$90',
    },
    {
      image: `${process.env.PUBLIC_URL}/Images/stone-06.png`,
      title: 'Stone 6',
      price: '$100',
    }
  ];


  return (
    <section className="category-section  my-2 p-4">
      <h2 className="text-2xl font-bold mb-6">Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="image-item bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100"
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <div className="text-center mt-3 p-4">
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
