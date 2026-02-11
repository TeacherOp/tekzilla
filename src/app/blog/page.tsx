import { getPostsPaginated } from "@/lib/wordpress";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { PostCard } from "@/components/posts/post-card";
import Sidebar from "@/components/posts/Sidebar";
import { cn } from '@/lib/utils';
import { siteConfig } from "@/site.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teckzilla Blogs - Odoo Technologies, ERP Design Solution",
  description: `World's best collection of ERP Blogs, new technologies, and growth in IT solutions with Odoo Gold Partner Get the Best from Teckzilla.`,
  keywords: [
    "ERP Blogs",
    "Odoo",
    "Odoo Gold Partner",
    "ERP Design Solution",
    "IT Solutions",
    "Enterprise Resource Planning",
    "Business Automation",
    "Open Source ERP",
    "Odoo Implementation",
    "Odoo Development",
    "Teckzilla",
    "Technology Blogs",
    "Business Growth",
    "Odoo Customization",
    "Software Development",
    "Digital Transformation",
  ],
  alternates: {
    canonical: siteConfig.site_domain + "/blog",
  },
  metadataBase: new URL(`${siteConfig.site_domain}/blog`),
  robots: {
    index: true,
    follow: true,
  },
};

// Revalidate every 1 hour (3600 seconds)
// This means the page is cached and only refreshes every hour
export const revalidate = 3600;

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    author?: string;
    tag?: string;
    category?: string;
    page?: string;
    search?: string;
  }>;
}) {
  const params = await searchParams;
  const { author, tag, category, page: pageParam, search } = params;

  // Handle pagination
  const page = pageParam ? parseInt(pageParam, 10) : 1;
  const postsPerPage = 9;

  let posts: any[] = [];
  let total = 0;
  let totalPages = 0;
  let error: string | null = null;

  try {
    // Fetch data based on search parameters using efficient pagination
    const [postsResponse] = await Promise.all([
      getPostsPaginated(page, postsPerPage, {
        author,
        tag,
        category,
        search,
      }),
    ]);

    posts = postsResponse.data;
    total = postsResponse.headers.total;
    totalPages = postsResponse.headers.totalPages;
  } catch (err: any) {
    console.error("Error fetching posts:", err);
    error = err.message || "Failed to load posts. Please try again later.";
  }

  // Create pagination URL helper
  const createPaginationUrl = (newPage: number) => {
    const params = new URLSearchParams();
    if (newPage > 1) params.set("page", newPage.toString());
    if (category) params.set("category", category.toString());
    if (author) params.set("author", author.toString());
    if (tag) params.set("tag", tag.toString());
    if (search) params.set("search", search.toString());
    return `/blog${params.toString() ? `?${params.toString()}` : ""}`;
  };

  return (
    <div className="min-h-[100vh] bg-[#fcfdff]">
      {/* HEADER */}
      <div className="bg-[#12336d] py-24 px-4 md:px-0 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
        </div>
        <div className="max-w-[1500px] mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
            Tech Insights & ERP Solutions
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Stay updated with the latest trends in Odoo, ERP implementation, and business automation from our expert team.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="w-full px-4 md:px-0 bg-white">
        <div className="flex flex-col lg:flex-row gap-12 py-20 max-w-[1500px] mx-auto">
          {/* LEFT - MAIN CONTENT */}
          <div className="flex-1 min-w-0 flex flex-col">
            {error ? (
              <div className="p-12 w-full border border-red-100 rounded-3xl bg-red-50/30 flex flex-col items-center justify-center text-center">
                <h3 className="text-xl font-bold text-red-800 mb-4">
                  Unable to Load Posts
                </h3>
                <p className="text-red-600 mb-6">{error}</p>
                <p className="text-sm text-red-500 max-w-sm">
                  The WordPress server may be experiencing issues. Please try
                  again later.
                </p>
              </div>
            ) : posts.length > 0 ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="h-64 w-full border border-gray-100 rounded-3xl bg-gray-50/50 flex flex-col items-center justify-center text-center">
                <p className="text-gray-500 font-medium">No posts found</p>
                <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filters.</p>
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-16">
                <Pagination>
                  <PaginationContent className="gap-2">
                    {page > 1 && (
                      <PaginationItem>
                        <PaginationPrevious
                          href={createPaginationUrl(page - 1)}
                          className="bg-white border-gray-100 hover:bg-[#6366f1] hover:text-white transition-all rounded-xl shadow-sm"
                        />
                      </PaginationItem>
                    )}

                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter((pageNum) => {
                        return (
                          pageNum === 1 ||
                          pageNum === totalPages ||
                          Math.abs(pageNum - page) <= 1
                        );
                      })
                      .map((pageNum, index, array) => {
                        const showEllipsis =
                          index > 0 && pageNum - array[index - 1] > 1;
                        return (
                          <div key={pageNum} className="flex items-center gap-2">
                            {showEllipsis && (
                              <span className="text-gray-300 px-1">...</span>
                            )}
                            <PaginationItem>
                              <PaginationLink
                                href={createPaginationUrl(pageNum)}
                                isActive={pageNum === page}
                                className={cn(
                                  "w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all shadow-sm",
                                  pageNum === page
                                    ? "bg-[#6366f1] text-white border-none"
                                    : "bg-white border border-gray-100 text-[#12336d] hover:bg-gray-50"
                                )}
                              >
                                {pageNum}
                              </PaginationLink>
                            </PaginationItem>
                          </div>
                        );
                      })}

                    {page < totalPages && (
                      <PaginationItem>
                        <PaginationNext
                          href={createPaginationUrl(page + 1)}
                          className="bg-white border-gray-100 hover:bg-[#6366f1] hover:text-white transition-all rounded-xl shadow-sm"
                        />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              </div>
            )}
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
