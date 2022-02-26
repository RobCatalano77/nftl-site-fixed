import React from 'react';

export default function AboutUs() {
  return (
    <>
      <h1 className='heading'>About Us</h1>
      <h2 className='subheading'>Why NFT Logistics?</h2>
      <p className='paragraph'>At NFT Logistics, we combine over 50 years of warehousing and supply chain experience in effort to deliver the most elite quality of customer service in the Logistics Industry. We pride ourselves in working tirelessly for clients to meet their needs from the first mile to the last mile, and everything in between.</p>
      <img src={require('../../images/warehouse.jpg')} />
      <h2 className='subheading'>Our Mission</h2>
    </>
  );
}