import { gridItems } from "@/data/index";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const Grid = () => {
  return (
    <section id="about" className="relative h-auto sm:mt-52 md:mt-0">
      <BentoGrid className="w-full h-full relative">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            className={i === 0 || i === 3 ? "md:col-span-2" : ""}
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