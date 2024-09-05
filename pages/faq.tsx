'use client'; // Make sure this runs on the client side

import { useState } from 'react';
import Image from 'next/image';
import SimpleButton from '@/components/SimpleButton';
export default function HeartToggle() {
  const [isLiked, setIsLiked] = useState(false); // State to track whether it's liked or not

  const toggleLike = () => {
    setIsLiked(!isLiked); // Toggle the heart icon
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <button
        onClick={toggleLike} // Trigger toggle on click
        style={{ background: 'transparent', border: 'none', cursor: 'pointer' }} // Style the button
      >
        <Image
          src={isLiked ? '/assets/heart-filled.svg' : '/assets/heart-gray.svg'} // Toggle between gray and filled heart
          alt="heart icon"
          width={50}
          height={50}
        />
      </button>
      <SimpleButton/>
    </div>
  );
}
