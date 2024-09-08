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
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center !important">
          <div className="bg-white p-4 rounded-lg relative max-w-md mx-auto md:max-w-lg lg:max-w-2xl !important">
            <img
              src="/assets/close.svg"
              alt="Close"
              className="absolute top-0 right-0 w-9 h-9 cursor-pointer"
              onClick={handleClose}
            />
            <img src="/logo white.png" alt="Hubpost Logo" className="w-24 h-24 mb-1" />
            <p className="text-lg font-bold md:w-full md:flex md:flex-col md:items-center">
  Please re-upload your profile picture to complete your profile changes.
  <br className="md:inline" />
  This ensures your updated information is accurately reflected.
  <br className="md:inline" />
  <span className="text-green-600">(Note: This step is necessary even if you've uploaded a picture before)</span>
</p>
          </div>
        </div>
      )}
    </>
  );
};

export default OverlayAlert;