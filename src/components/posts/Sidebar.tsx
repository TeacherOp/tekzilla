import {
  getAllCategoriesPaginated,
  getPopularTags,
  getPostsPaginated,
} from "@/lib/wordpress";
import { CategoriesList } from "./CategoriesList";
import RecentPostsList from "./RecentPostsList";
import SearchPost from "./search-post";
import { TagsList } from "./TagsList";

export default async function Sidebar() {
  // Fetch all sidebar data in parallel
  const [{ data: recentPosts = [] }, categories = [], tags = []] =
    await Promise.all([
      getPostsPaginated(1, 5), // 5 recent posts
      getAllCategoriesPaginated(),
      getPopularTags(),
    ]);

  return (
    <aside className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-10">
      {/* SEARCH SECTION */}
      <SearchPost />

      {/* RECENT POSTS */}
      <RecentPostsList posts={recentPosts} />

      {/* CATEGORIES - with Show More */}
      <CategoriesList categories={categories} initialVisible={5} />

      {/* TAGS - with Show More */}
      <TagsList tags={tags} initialVisible={12} />
    </aside>
  );
}

// Loading skeleton to be used with Suspense
export function LoadingSidebar() {
  return (
    <aside className="w-full lg:w-80 flex-shrink-0 flex flex-col gap-6 animate-pulse">
      <div className="h-20 bg-gray-200 rounded-lg" />
      <div className="bg-white rounded-lg shadow-md p-5">
        <div className="h-6 w-1/2 bg-gray-200 rounded mb-4" />
        <div className="space-y-3">
          <div className="h-4 w-full bg-gray-100 rounded" />
          <div className="h-4 w-5/6 bg-gray-100 rounded" />
          <div className="h-4 w-3/4 bg-gray-100 rounded" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-5">
        <div className="h-6 w-1/3 bg-gray-200 rounded mb-4" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-100 rounded" />
          <div className="h-4 w-5/6 bg-gray-100 rounded" />
          <div className="h-4 w-2/3 bg-gray-100 rounded" />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-5">
        <div className="h-6 w-1/3 bg-gray-200 rounded mb-4" />
        <div className="flex flex-wrap gap-2">
          <div className="h-6 w-12 bg-gray-100 rounded" />
          <div className="h-6 w-16 bg-gray-100 rounded" />
          <div className="h-6 w-10 bg-gray-100 rounded" />
        </div>
      </div>
    </aside>
  );
}
