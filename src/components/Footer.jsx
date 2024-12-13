import React from 'react';

const Footer = () => {
   return (
      <footer className="bg-white shadow-lg text-dark py-6">
         <div className="container mx-auto text-center">
            <p>© {new Date().getFullYear()} Stonepedia. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
               <a href="#" className="text-blue-400 hover:underline">Facebook</a>
               <a href="#" className="text-blue-400 hover:underline">Twitter</a>
               <a href="#" className="text-blue-400 hover:underline">Instagram</a>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
