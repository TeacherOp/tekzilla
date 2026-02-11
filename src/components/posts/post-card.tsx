// c:\Users\patil\OneDrive\Desktop\tekzilla\src\components\posts\post-card.tsx

import { cn } from "@/lib/utils";
import { getCategoryById } from "@/lib/wordpress";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export async function PostCard({ post }: { post: any }) {
  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const categories = post.categories
    ? await Promise.all(
      post.categories.map((catId: number) => getCategoryById(catId)),
    )
    : [];
  const media = post._embedded["wp:featuredmedia"]?.find(
    (m: any) => m.id == post.featured_media,
  );

  return (
    <Link
      href={`/${post.slug}`}
      className={cn(
        "group relative flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300",
        "hover:shadow-xl hover:border-[#6366f1]/20 hover:-translate-y-1",
      )}
    >
      {/* Image Section */}
      <div className="relative h-60 w-full overflow-hidden">
        {media?.source_url ? (
          <Image
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            src={media.source_url}
            alt={post.title?.rendered || "Post thumbnail"}
            width={480}
            height={300}
            sizes="(max-width:800px) 100vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-[#12336d]">
            <span className="text-white text-2xl font-bold opacity-20 uppercase tracking-widest">Tekzilla</span>
          </div>
        )}

        {/* Category Badge on Image */}
        {categories.length > 0 && (
          <div className="absolute top-4 left-4">
            <span className="bg-[#6366f1] text-white px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider shadow-lg">
              {categories[0].name}
            </span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs text-gray-400 font-medium mb-4">
          <span className="w-1.5 h-1.5 bg-gray-200 rounded-full"></span>
          <span>{date}</span>
        </div>

        <h3
          className="text-xl font-bold text-[#12336d] mb-4 line-clamp-2 leading-tight group-hover:text-[#6366f1] transition-colors"
          dangerouslySetInnerHTML={{
            __html: post.title?.rendered || "Untitled Post",
          }}
        />

        <div
          className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-6"
          dangerouslySetInnerHTML={{
            __html: post.excerpt?.rendered
              ? post.excerpt.rendered.replace(/<[^>]*>/g, "").split(" ").slice(0, 20).join(" ").trim() + "..."
              : "No excerpt available",
          }}
        />

        <div className="mt-auto flex items-center gap-2 text-[#6366f1] text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
          <span>Read More</span>
          <MoveRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
