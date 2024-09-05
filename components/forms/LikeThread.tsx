"use client";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { likeThread } from '@/lib/actions/thread.actions';
import Image from 'next/image';


interface LikeThreadProps {
    threadId: string;
    userId: string;
  }
  
  const LikeThread = ({ threadId, userId }: LikeThreadProps) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = async () => {
    const success = await likeThread(threadId, userId);
    if (success) {
      setLiked(!liked);
      toast.success('Thread liked successfully!');
    } else {
      toast.error('Failed to like thread. Please try again!');
    }
  };

  return (
    <button onClick={toggleLike}>
      {liked ? (
        <Image src="/assets/heart-filled.svg" width={24} height={24} alt={''}/>
      ) : (
        <Image src="/assets/heart-gray.svg" width={24} height={24} alt={''} />
      )}
    </button>
  );
};

export default LikeThread;