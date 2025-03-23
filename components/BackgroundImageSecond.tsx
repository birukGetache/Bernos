import Image from "next/image";

const BackgroundImage = () => {
  return (
    <div className="absolute top-0 h-screen  w-screen overflow-x-hidden ">
      {/* <Image
        src="/leftImage.png"
        alt="first background"
        width={600}
        height={900}
        className="absolute bottom-0" // Apply grayscale filter
      /> */}
      <div className="absolute top-0 right-0 flex flex-col items-end">
      <Image
        src="/triangle.png"
        alt="first background"
        width={250}
        height={400}
        
      />
      <Image
        src="/backtraingle.png"
        alt="first background"
        width={400}
        height={600}
        className="-mt-[72%]"
      />
      </div>
    
    </div>
  );
};

export default BackgroundImage;
