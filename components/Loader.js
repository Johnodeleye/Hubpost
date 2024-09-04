// components/Loader.js
import Image from 'next/image';

const Loader = () => {
  return (
<div className="fixed top-1/2 left-0 w-full h-full bg-white" style={{ 
  display: 'grid', 
  placeItems: 'center', 
  zIndex: 1000, 
  backgroundColor: 'rgba(255, 255, 255, 0.5)', 
  transform: 'translateY(+50%)'
}}>
  <Image src="/loader.gif" alt="Loader" width={300} height={300} unoptimized/>
</div>
  );
};

export default Loader;