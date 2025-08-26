import { BlockRenderer } from "@/components/BlockRenderer";
import { BlogCard } from "@/components/BlogCard";
import { ContentList } from "@/components/ContentList";
import { getHomePageData } from "@/data/loader";
import { notFound } from "next/navigation";


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
      <div className="container">
        <ContentList
          headline="Check out our Featured Articles"
          path="/api/articles"
          component={BlogCard}
          featured={true}
        />
      </div>
    </div>
  );
}
