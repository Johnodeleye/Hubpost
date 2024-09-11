'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
export default function HeartToggle() {
    const [isLiked, setIsLiked] = useState(false);
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const storedIsLiked = localStorage.getItem('isLiked');
      const storedCount = localStorage.getItem('likeCount');
      if (storedIsLiked) setIsLiked(storedIsLiked === 'true');
      if (storedCount) setCount(parseInt(storedCount));
    }, []);
  
    useEffect(() => {
      localStorage.setItem('isLiked', isLiked.toString());
    }, [isLiked]);
  
    useEffect(() => {
      localStorage.setItem('likeCount', count.toString());
    }, [count]);
  
    const toggleLike = () => {
      setIsLiked(!isLiked);
      setCount(isLiked ? count - 1 : count + 1);
    };

    return (
        <button onClick={toggleLike} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <Image
            src={isLiked ? '/assets/heart-filled.svg' : '/assets/heart-gray.svg'}
            alt="heart icon"
            width={24} // Reduced width and height to match other buttons
            height={24}
          />
          <p className='text-green-600 text-small-semibold'>{count}</p>
        </button>
      );
}