import React from 'react';
import '../../App.css';
import ImageGallery from 'react-image-gallery';

export default function Home() {

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  
  return (
    <>
        <h1 className='heading'>NFT Logistics</h1>
        <h2 className='subheading'>From big to small, we handle it all!</h2>
        {//<ImageGallery items={images} />
        }

    </>
  );
}
