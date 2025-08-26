import { BlockRenderer } from "@/components/BlockRenderer";
import { BlogCard } from "@/components/BlogCard";
import { ContentList } from "@/components/ContentList";
import { getPageBySlug } from "@/data/loader";
import { notFound } from "next/navigation";

async function loader(slug: string) {
    const { data } = await getPageBySlug(slug);
    if (data.length === 0) notFound();
    return { blocks: data[0]?.blocks };
}

interface PageProps {
    searchParams: Promise<{ page: string, query?: string }>
}


export default async function BlogPage({ searchParams }: PageProps) {
    const { page, query } = await searchParams;
    const { blocks } = await loader("blog");
    return (
        <div className="blog-page">
            <BlockRenderer blocks={blocks} />
            <ContentList
                headline="Check out our latest blog posts"
                path="/api/articles"
                component={BlogCard}
                showSearch
                query={query}
                showPagination
                page={page}
            />
        </div>
    );
}