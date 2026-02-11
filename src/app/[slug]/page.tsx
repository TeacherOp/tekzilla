import { Article } from "@/components/craft";
import { getCategoryById, getPostBySlug } from "@/lib/wordpress";
import { siteConfig } from "@/site.config";
import Balancer from "react-wrap-balancer";

import Sidebar from "@/components/posts/Sidebar";
import type { Metadata } from "next";

// Revalidate every 1 hour (3600 seconds)
export const revalidate = 3600;

// Meta remains unchanged
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }
  const description = post.excerpt.rendered.replace(/<[^>]*>/g, "").trim();
  return {
    title: post.title.rendered,
    description,
    openGraph: {
      title: post.title.rendered,
      description,
      type: "article",
      url: `${siteConfig.site_domain}/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.rendered,
      description,
    },
    alternates: {
      canonical: `${siteConfig.site_domain}/${post.slug}`,
    },
    metadataBase: new URL(`${siteConfig.site_domain}/${post.slug}`),
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = (await getPostBySlug(slug)) as any;
  const categories = post.categories
    ? await Promise.all(
      post.categories.map((catId: number) => getCategoryById(catId)),
    )
    : [];
  const media = post._embedded["wp:featuredmedia"]?.find(
    (m: any) => m.id == post.featured_media,
  );
  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-[100vh] bg-white">
      {/* HEADER */}
      <div className="bg-[#12336d] py-24 px-4 md:px-0 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
        </div>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat: any) => (
                <span
                  key={cat.id}
                  className="bg-[#6366f1] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                >
                  {cat.name}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              <Balancer>
                <span
                  dangerouslySetInnerHTML={{
                    __html: post.title.rendered,
                  }}
                ></span>
              </Balancer>
            </h1>
          </div>
        </div>
      </div>

      {/* CONTENT & SIDEBAR */}
      <div className="w-full px-4 md:px-0">
        <div className="flex flex-col lg:flex-row justify-between gap-12 py-20 max-w-[1200px] mx-auto">
          {/* LEFT - ARTICLE */}
          <div className="flex-1 min-w-0 max-w-7xl">
            {/* Feature Media */}
            {media && media.source_url && (
              <div className="mb-12 w-full rounded-2xl overflow-hidden shadow-lg">
                <img
                  decoding="async"
                  className="w-full h-auto object-cover"
                  src={media.source_url}
                  alt={post.title?.rendered || "Featured media"}
                  title={post.title?.rendered || ""}
                />
              </div>
            )}

            <div >
              <Article
                dangerouslySetInnerHTML={{
                  __html: post.content.rendered,
                }}
              />
            </div>

          </div>

          {/* RIGHT - SIDEBAR */}
          <div className="lg:w-80 flex-shrink-0">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
