'use client';
import React, { useState } from 'react';

const OverlayAlert = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg relative max-w-md mx-auto md:max-w-lg lg:max-w-2xl">
            <img
              src="/assets/close.svg"
              alt="Close"
              className="absolute top-0 right-0 w-9 h-9 cursor-pointer"
              onClick={handleClose}
            />
            <img src="/logo white.png" alt="Hubpost Logo" className="w-24 h-24 mb-1" />
            <p className="text-lg font-bold md:w-full md:flex md:flex-col">
          Updating your profile picture is required for {''}
          your profile changes to take effect.
          <br className="md:inline" />
          Please re-upload your profile picture to complete your update
        </p>
          </div>
        </div>
      )}
    </>
  );
};

export default OverlayAlert;