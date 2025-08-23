import { getHomePageData } from "@/data/loader";
import Image from "next/image";
import { notFound } from "next/navigation";
import { HeroSection } from "@/components/blocks/HeroSections";
import { InfoBlock } from "@/components/blocks/InfoBlocks";
import { BlockRenderer } from "@/components/BlockRenderer";


const loader = async () => {
  const data = await getHomePageData();
  if (!data) notFound();

  return { ...data };
}



export default async function Home() {
  const data = await loader();
  const blocks = data?.blocks || [];
  return (
    <div>

      <BlockRenderer blocks={blocks} />
    </div>
  );
}
