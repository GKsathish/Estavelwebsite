import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const location = useLocation(); // To highlight the active link
   const [searchQuery, setSearchQuery] = useState('');

   const handleSearch = (e) => {
      e.preventDefault();
      console.log('Searching for:', searchQuery);
      // Redirect or perform the search logic here
   };
   const navItems = [
      { title: 'Home', link: '/' },
      { title: 'About', link: '/category' },
      { title: 'Contact', link: '/contact' },
   ];


   return (
      <nav className="bg-white shadow-lg sticky top-0 z-50">
         <div className="container mx-auto flex justify-between items-center p-4">
            {/* Logo Section */}
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-gray-800">
               <img src="stoneheader.png" className="w-22 h-10" alt="header-logo" />
            </Link>

            {/* Search Bar */}
            <form
               onSubmit={handleSearch}
               className="hidden md:flex items-center space-x-2 bg-gray-100 rounded-lg p-4"
               >
               <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="bg-transparent outline-none w-50 text-gray-600"
               />
               <button
                  type="submit"
                  className="text-gray-600 hover:text-blue-600 focus:outline-none"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth={2}
                     stroke="currentColor"
                     className="w-5 h-5"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                     />
                  </svg>
               </button>
            </form>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
                  <li key={item.title}>
                     <Link
                        to={item.link} // Use 'link' from the object
                        className={`relative pb-1 ${
                           location.pathname === item.link
                              ? 'text-gray-800 font-semibold border-b-2 border-gray-800'
                              : 'text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600'
                        } transition-all duration-300`}
                     >
                        {item.title} {/* Use 'title' from the object */}
                     </Link>
                  </li>
               ))}
            </ul>

            {/* Hamburger Icon for Mobile */}
            <button
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
            >
               <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth={2}
                     d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
               </svg>
            </button>
         </div>

         {/* Mobile Menu */}
         {isMenuOpen && (
            <ul className="md:hidden bg-white shadow-lg space-y-4 p-4">
               <form
                  onSubmit={handleSearch}
                  className="flex items-center space-x-2 bg-gray-100 rounded-lg px-4 py-1"
               >
                  <input
                     type="text"
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     placeholder="Search..."
                     className="bg-transparent outline-none w-full text-gray-600"
                  />
                  <button
                     type="submit"
                     className="text-gray-600 hover:text-blue-600 focus:outline-none"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                        />
                     </svg>
                  </button>
               </form>
               {navItems.map((item) => (
                  <li key={item.title}>
                     <Link
                        to={item.link} // Use 'link' from the object
                        className={`relative pb-1 ${
                           location.pathname === item.link
                              ? 'text-gray-800 font-semibold border-b-2 border-gray-800'
                              : 'text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600'
                        } transition-all duration-300`}
                     >
                        {item.title} {/* Use 'title' from the object */}
                     </Link>
                  </li>
               ))}
            </ul>
         )}
      </nav>
   );
};

export default Navbar;
