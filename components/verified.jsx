
import Image from 'next/image';

const Verified = () => {
  return (
    <Image
      src="/verified.png"
      alt="Verified badge"
      layout="fixed"
      width={24} 
      height={24} 
      className="w-4 h-4 ml-2"
    />
  );
};

export default Verified;