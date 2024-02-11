import { useState } from 'react';
import ImageUpload from './components/ImageUpload';
import Image from 'next/image';

const Home = () => {
  const handleImageUpload = (files : any) => {
    console.log(files);
  };

  return (
    <div>
      <h1>Face Patrol</h1>
      <Image src={"/logo.png"} alt='logo' width={100} height={100}></Image>
      <ImageUpload onUpload={handleImageUpload} />
    </div>
  );
};

export default Home;