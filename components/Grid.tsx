import { gridItems } from "@/data";
import dynamic from "next/dynamic";

// Dynamically import BentoGrid and BentoGridItem
const BentoGrid = dynamic(() => import("./ui/BentoGrid").then((mod) => mod.BentoGrid), {
  ssr: false,  // You can disable server-side rendering if needed
});
const BentoGridItem = dynamic(() => import("./ui/BentoGrid").then((mod) => mod.BentoGridItem), {
  ssr: false,  // Disable server-side rendering if needed
});

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
