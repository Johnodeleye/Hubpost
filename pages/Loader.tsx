// components/Loader.js
import Image from 'next/image';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center">
      <Image src="/public/Logo White.png" alt="Loader" width={300} height={300} unoptimized/>
    </div>
  );
};

export default Loader;