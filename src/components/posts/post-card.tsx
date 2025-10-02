// c:\Users\patil\OneDrive\Desktop\tekzilla\src\components\posts\post-card.tsx

import { cn } from "@/lib/utils";
import { getCategoryById } from "@/lib/wordpress";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";

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
        "group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm transition-all duration-200 flex flex-col not-prose h-full min-h-[420px]",
        "hover:shadow-xl hover:border-primary/50 focus:ring-2 focus:ring-primary/30",
      )}
    >
      {/* Image Section */}
      <div className="relative h-52 w-full overflow-hidden rounded-t-2xl">
        {media?.source_url ? (
          <Image
            className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
            src={media.source_url}
            alt={post.title?.rendered || "Post thumbnail"}
            width={480}
            height={220}
            quality={80}
            priority={false}
            sizes="(max-width:800px) 100vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gradient-to-t from-primary/90 via-primary to-[#306fff]">
            <span
              className="text-2xl font-bold text-white text-center px-3 line-clamp-2 drop-shadow"
              dangerouslySetInnerHTML={{
                __html: post.title?.rendered || "Untitled Post",
              }}
            ></span>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col px-5 py-5 gap-2">
        <div
          dangerouslySetInnerHTML={{
            __html: post.title?.rendered || "Untitled Post",
          }}
          className="text-lg font-semibold text-[#12336d] mb-2 transition-colors group-hover:text-primary"
        ></div>
        <div
          className="text-sm text-gray-600 leading-snug mb-2 line-clamp-2"
          dangerouslySetInnerHTML={{
            __html: post.excerpt?.rendered
              ? post.excerpt.rendered.split(" ").slice(0, 18).join(" ").trim() +
                "..."
              : "No excerpt available",
          }}
        ></div>
        {/* Category badges */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 my-1">
            {categories.map((c, i) => (
              <Badge key={c.id || i} variant={"secondary"}>
                {c.name}
              </Badge>
            ))}
          </div>
        )}
        {/* Date at Bottom */}
        <div className="flex flex-row justify-between items-end mt-auto pt-2">
          <span className="block text-xs text-gray-400">{date}</span>
        </div>
      </div>
      {/* Subtle Hover highlight */}
      <span className="absolute inset-0 pointer-events-none transition-all duration-200 group-hover:bg-primary/5 rounded-2xl" />
    </Link>
  );
}
