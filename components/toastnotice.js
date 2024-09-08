"use client";
import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';

const ToastNotification = () => {
  useEffect(() => {
    console.log('Toast notification triggered!');
    toast.info('Please update your profile picture for better results!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  return (
    <ToastContainer theme="dark">
      <div>Toast container is working!</div>
    </ToastContainer>
  );
};

export default ToastNotification;