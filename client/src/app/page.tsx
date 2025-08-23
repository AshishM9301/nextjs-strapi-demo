import { getHomePageData } from "@/data/loader";
import Image from "next/image";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/blocks/HeroSections";


const loader = async () => {
  const data = await getHomePageData();
  if (!data) notFound();
  console.log(data);
  return { ...data };
}



export default async function Home() {
  const data = await loader();
  const blocks = data?.blocks || [];
  return (
    <div>

      <HeroSection
        id={blocks[0].id}
        theme={blocks[0].theme}
        heading={blocks[0].heading}
        cta={blocks[0].cta}
        image={blocks[0].image}
        logo={blocks[0].logo}
      />

    </div>
  );
}
