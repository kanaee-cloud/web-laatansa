import React, { useEffect, useRef } from 'react';
import { images } from '../../data/GalleryImages'; 

const AutoSlidingGrid = () => {
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);

  // Sample image data with descriptions
  

  // Split images into two rows
  const topRowImages = images.slice(0, 6);
  const bottomRowImages = images.slice(6, 12);

  // Duplicate images multiple times for truly infinite scroll effect
  const duplicatedTopRow = [...topRowImages, ...topRowImages, ...topRowImages, ...topRowImages, ...topRowImages];
  const duplicatedBottomRow = [...bottomRowImages, ...bottomRowImages, ...bottomRowImages, ...bottomRowImages, ...bottomRowImages];

  useEffect(() => {
    const topRow = topRowRef.current;
    const bottomRow = bottomRowRef.current;

    if (topRow && bottomRow) {
      // Reset animation
      topRow.style.animation = 'none';
      bottomRow.style.animation = 'none';
      
      // Trigger reflow
      topRow.offsetHeight;
      bottomRow.offsetHeight;
      
     
      topRow.style.animation = 'slideRight 60s linear infinite';
      bottomRow.style.animation = 'slideLeft 60s linear infinite';
    }
  }, []);

  const ImageCard = ({ image }) => (
    <div className="flex-shrink-0 w-90 h-64 rounded-lg shadow-lg overflow-hidden mx-3 hover:shadow-2xl transition-all duration-300 relative group">
      <div className="w-full h-full relative overflow-hidden">
        <img 
          src={image.image} 
          alt={image.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Fade background overlay - appears on hover for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-500"></div>
        
        {/* Description overlay - appears on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="text-center text-white p-6 max-w-full z-10">
            <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{image.title}</h3>
            <p className="text-sm text-gray-100 leading-relaxed drop-shadow-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">{image.description}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-gray-900 py-12 overflow-hidden">

      {/* Top Row - Moving Right */}
      <div className="mb-8 overflow-hidden">
        <div 
          ref={topRowRef}
          className="flex items-center"
          style={{
            width: 'fit-content',
            animation: 'slideRight 60s linear infinite'
          }}
        >
          {duplicatedTopRow.map((image, index) => (
            <ImageCard key={`top-${image.id}-${index}`} image={image} />
          ))}
        </div>
      </div>

      {/* Bottom Row - Moving Left */}
      <div className="overflow-hidden">
        <div 
          ref={bottomRowRef}
          className="flex items-center"
          style={{
            width: 'fit-content',
            animation: 'slideLeft 60s linear infinite'
          }}
        >
          {duplicatedBottomRow.map((image, index) => (
            <ImageCard key={`bottom-${image.id}-${index}`} image={image} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes slideLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default AutoSlidingGrid;