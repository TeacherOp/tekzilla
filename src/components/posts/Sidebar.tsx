import {
  getAllCategoriesPaginated,
  getPopularTags,
  getPostsPaginated,
} from "@/lib/wordpress";
import Link from "next/link";
import SearchPost from "./search-post";

export default async function Sidebar() {
  // Fetch all sidebar data in parallel
  const [{ data: recentPosts = [] }, categories = [], tags = []] =
    await Promise.all([
      getPostsPaginated(1, 5), // 5 recent posts
      getAllCategoriesPaginated(),
      getPopularTags(),
    ]);

  return (
    <aside className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-7">
      {/* SEARCH SECTION */}
      <SearchPost />
      {/* RECENT POSTS */}
      <div className="bg-white rounded-lg shadow p-5">
        <h2 className="font-bold mb-3 text-lg text-[#12336d]">Recent Posts</h2>
        <ul className="divide-y divide-gray-200">
          {recentPosts.map((p: any, i: number) => (
            <li key={p.id} className={i === 0 ? "pt-0 pb-2" : "pt-2 pb-2"}>
              <Link
                href={`/${p.slug}`}
                className="block px-1 transition-colors hover:text-primary  duration-150"
                dangerouslySetInnerHTML={{
                  __html: p.title.rendered,
                }}
              />
            </li>
          ))}
        </ul>
      </div>
      {/* CATEGORIES */}
      <div className="bg-white rounded-lg shadow p-5">
        <h2 className="font-bold mb-3 text-lg text-[#12336d]">Categories</h2>
        <ul className="divide-y divide-gray-200 text-sm">
          {categories.map((cat: any, i: number) => (
            <li key={cat.id} className={i === 0 ? "pt-0 pb-2" : "pt-2 pb-2"}>
              <Link
                href={`/blog?category=${cat.id}`}
                className="flex justify-between items-center transition-colors text-gray-800 hover:text-primary duration-150 px-1"
              >
                <span>{cat.name}</span>
                <span className="ml-3 text-xs text-gray-500">
                  ({cat.count})
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* TAGS */}
      <div className="bg-white rounded-lg shadow p-5">
        <h2 className="font-bold mb-3 text-sm text-[#12336d]">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags
            .sort((a: any, b: any) => a.name.localeCompare(b.name))
            .map((tag: any) => (
              <Link
                key={tag.id}
                href={`/blog?tag=${tag.id}`}
                className="bg-blue-50 text-[#12336d] px-3 py-1 rounded text-sm hover:bg-blue-100"
              >
                {tag.name}
              </Link>
            ))}
        </div>
      </div>
    </aside>
  );
}

// Loading skeleton to be used with Suspense
export function LoadingSidebar() {
  return (
    <aside className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-7 animate-pulse">
      <div className="h-12 bg-gray-200 rounded mb-4" />
      <div className="bg-white rounded-lg shadow p-5 mb-2">
        <div className="h-6 w-1/2 bg-gray-200 rounded mb-3" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-100 rounded" />
          <div className="h-4 w-5/6 bg-gray-100 rounded" />
          <div className="h-4 w-3/4 bg-gray-100 rounded" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-5 mb-2">
        <div className="h-6 w-1/3 bg-gray-200 rounded mb-3" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-100 rounded" />
          <div className="h-4 w-5/6 bg-gray-100 rounded" />
          <div className="h-4 w-2/3 bg-gray-100 rounded" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-5 mb-2">
        <div className="h-6 w-1/3 bg-gray-200 rounded mb-3" />
        <div className="flex flex-wrap gap-2">
          <div className="h-6 w-12 bg-gray-100 rounded" />
          <div className="h-6 w-16 bg-gray-100 rounded" />
          <div className="h-6 w-10 bg-gray-100 rounded" />
        </div>
      </div>
    </aside>
  );
}
