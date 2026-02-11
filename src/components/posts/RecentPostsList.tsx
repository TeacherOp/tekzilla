import Image from "next/image";
import Link from "next/link";

interface RecentPostsListProps {
  posts: any[];
}

export default function RecentPostsList({ posts }: RecentPostsListProps) {
  return (
    <div className="bg-[#f8faff] rounded-2xl border border-[#eef2ff] p-8 shadow-sm">
      <h2 className="text-xl font-bold text-[#12336d] mb-6 relative inline-block">
        Recent Posts
        <span className="absolute -bottom-2 left-0 w-8 h-[3px] bg-[#12336d]"></span>
        <span className="absolute -bottom-2 left-10 w-24 h-[3px] bg-[#6366f1]/30"></span>
      </h2>
      <ul className="space-y-6 mt-4">
        {posts.map((post: any) => {
          const media = post._embedded["wp:featuredmedia"]?.find(
            (m: any) => m.id == post.featured_media,
          );

          return (
            <li key={post.id} className="group">
              <Link href={`/${post.slug}`} className="flex gap-4">
                <div className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border border-gray-100">
                  {media?.source_url ? (
                    <Image
                      src={media.source_url}
                      alt={post.title.rendered}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#12336d] flex items-center justify-center text-white text-[10px] p-2 text-center uppercase">
                      Tekzilla
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-center">
                  <h3
                    className="text-sm font-bold text-[#12336d] line-clamp-2 leading-snug group-hover:text-[#6366f1] transition-colors"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
