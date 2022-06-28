import React from 'react';
import '../../App.css';
import ImageGallery from 'react-image-gallery';

export default function Home() {

  const images = [
    {
      original: require('../../images/shelves.jpg'),
      thumbnail: require('../../images/shelves_thumbnail.jpg'),
    },
    {
      original: require('../../images/trucks_final_mile.jpg'),
      thumbnail: require('../../images/trucks_final_mile_thumbnail.jpg'),
    }
  ];
  
  return (
    <>
        <h1 className='heading'>NFT Logistics</h1>
        <h2 className='subheading'>From big to small, we handle it all!</h2>
        <div className='img-gallery'>
          <ImageGallery showPlayButton={true} showBullets={true} showThumbnails={true} items={images} />
        </div>
        
        

    </>
  );
}
