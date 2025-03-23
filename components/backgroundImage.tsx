import Image from "next/image";

const BackgroundImage = () => {
  return (
    <div className="absolute top-0 h-screen w-screen overflow-x-hidden">
      <Image
        src="/backgroundfirst.png"
        alt="first background"
        fill
        className="object-cover grayscale" // Apply grayscale filter
      />
    </div>
  );
};

export default BackgroundImage;
