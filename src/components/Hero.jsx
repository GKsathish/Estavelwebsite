import React from 'react';
import Slider from 'react-slick'; // Importing React Slick
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Category from '././Category';

const Hero = () => {
   const slides = [
      {
         image: '/Images/stone-01.png', // Correct path to image
         title: 'Explore Stonepedia',
         subtitle: 'Your trusted platform for premium stones',
         buttonText: 'Explore Now',
         buttonAction: () => window.location.href = '/category', // Example of redirection
      },
      {
         image: '/Images/stone-02.png', // Correct path to image
         title: 'Craftsmanship Redefined',
         subtitle: 'Elevate your spaces with our unique stones',
         buttonText: 'Learn More',
         buttonAction: () => window.location.href = '/category', // Example of redirection
      },
      {
         image: '/Images/stone-03.png', // Correct path to image
         title: 'Quality You Can Trust',
         subtitle: 'Discover a variety of premium stones',
         buttonText: 'Get Started',
         buttonAction: () => window.location.href = '/category', // Example of redirection
      },
   ];

   // Slick carousel settings
   const settings = {
      dots: true, // Enable dots for pagination
      infinite: true, // Infinite loop
      speed: 500, // Transition speed
      slidesToShow: 1, // Show 1 slide at a time
      slidesToScroll: 1, // Scroll 1 slide at a time
      autoplay: true, // Enable auto-play
      autoplaySpeed: 3000, // Speed for auto-play (3 seconds)
   };

   return (
      <section className="relative m-1">
         <Slider {...settings}>
            {slides.map((slide, index) => (
               <div 
                  key={index} 
                  className="relative h-[500px]"
               >
                  {/* Image that fills the entire container */}
                  <img 
                     src={slide.image} 
                     alt={slide.title} 
                     className="w-full h-full object-cover"  // Full width and height with cover to ensure the image fills the container
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                     <div className="text-center text-white px-4">
                        <h1 className="text-4xl md:text-6xl font-bold">{slide.title}</h1>
                        <p className="mt-4 text-lg md:text-xl">{slide.subtitle}</p>
                        <button
                           onClick={slide.buttonAction} // Attach the onClick handler here
                           className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                        >
                           {slide.buttonText}
                        </button>
                     </div>
                  </div>
               </div>
            ))}
         </Slider>
         <Category/>
      </section>
   );
};

export default Hero;
