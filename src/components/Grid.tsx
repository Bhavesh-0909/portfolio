import { gridItems } from "@/data/index";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="w-full h-full ">
        {gridItems.map((item) => (
          <BentoGridItem
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            BentoclassName={item.className}
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