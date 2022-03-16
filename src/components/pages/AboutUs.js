import React from 'react';

export default function AboutUs() {
  return (
    <>
      <h1 className='heading'>About Us</h1>
      <h2 className='subheading'>Why NFT Logistics?</h2>
      <p className='paragraph'>At NFT Logistics we combine over 50 years of warehousing and supply chain experience in effort to deliver the most elite quality of customer service in the Logistics Industry. We pride ourselves in working tirelessly for clients.</p>
      <img src={require('../../images/warehouse.jpg')} alt="warehousing" />
      <h2 className='subheading'>Our Mission</h2>
      <p className='paragraph'>Our mission is to help your company grow by improving the efficiency and effectiveness of your operation. We use our equipment, dedicated staff, and our proprietary warehousing management systems to save your business time and money. We are experienced in handling all different types of operations analyzing every detail and ensure we cater to everything your business needs to improve. NFT Logistics offers unbeatable prices for all warehousing and 3PL services. We are capable of handling all types of operations and recognize the difficulties associated big and bulky items down to parcel packages. Our management team is committed to transparency, compliance, and continuous growth for you and your business. Doing things right from the beginning saves costs in the end.</p>
    </>
  );
}