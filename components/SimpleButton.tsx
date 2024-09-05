'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const SimpleButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // Retrieve the saved like state from localStorage on component mount
    const savedLikeState = localStorage.getItem('isLiked');
    if (savedLikeState !== null) {
      setIsLiked(JSON.parse(savedLikeState)); // Convert the string back to a boolean
    }
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsLiked(prev => {
      const newLikeState = !prev;
      // Save the new state in localStorage whenever user interacts
      localStorage.setItem('isLiked', JSON.stringify(newLikeState));
      return newLikeState;
    });
    alert(`Heart ${!isLiked ? 'liked' : 'removed'}!`);
  };

  return (
    <button onClick={handleClick}>
      <Image
        src={isLiked ? '/assets/heart-filled.svg' : '/assets/heart-gray.svg'}
        alt="heart"
        width={24}
        height={24}
        className="object-contain cursor-pointer"
      />
    </button>
  );
};

export default SimpleButton;
