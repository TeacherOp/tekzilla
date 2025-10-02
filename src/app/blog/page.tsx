import { getPostsPaginated } from '@/lib/wordpress';

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

import { Container, Prose } from '@/components/craft';
import { PostCard } from '@/components/posts/post-card';

import Sidebar from '@/components/posts/Sidebar';
import { siteConfig } from '@/site.config';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Teckzilla Blogs - Odoo Technologies, ERP Design Solution',
    description: `World's best collection of ERP Blogs, new technologies, and growth in IT solutions with Odoo Gold Partner Get the Best from Teckzilla.`,
    keywords: [
        'ERP Blogs',
        'Odoo',
        'Odoo Gold Partner',
        'ERP Design Solution',
        'IT Solutions',
        'Enterprise Resource Planning',
        'Business Automation',
        'Open Source ERP',
        'Odoo Implementation',
        'Odoo Development',
        'Teckzilla',
        'Technology Blogs',
        'Business Growth',
        'Odoo Customization',
        'Software Development',
        'Digital Transformation',
    ],
    alternates: {
        canonical: siteConfig.site_domain + '/blog',
    },
    metadataBase: new URL(`${siteConfig.site_domain}/blog`),
    robots: {
        index: true,
        follow: true,
    },
};

export const dynamic = 'auto';
export const revalidate = 600;

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

    // Fetch data based on search parameters using efficient pagination
    const [postsResponse] = await Promise.all([
        getPostsPaginated(page, postsPerPage, {
            author,
            tag,
            category,
            search,
        }),
    ]);

    const { data: posts, headers } = postsResponse;
    const { total, totalPages } = headers;

    // Create pagination URL helper
    const createPaginationUrl = (newPage: number) => {
        const params = new URLSearchParams();
        if (newPage > 1) params.set('page', newPage.toString());
        if (category) params.set('category', category);
        if (author) params.set('author', author);
        if (tag) params.set('tag', tag);
        if (search) params.set('search', search);
        return `/blog${params.toString() ? `?${params.toString()}` : ''}`;
    };

    return (
        <>
            <div className='min-h-[100vh] bg-gray-50'>
                {/* HEADER */}
                <div className='bg-[#12336d] py-12 text-white'>
                    <Container>
                        <Prose>
                            <h2>All Posts</h2>
                            <p className=''>
                                {total} {total === 1 ? 'post' : 'posts'} found
                                {search && ' matching your search'}
                            </p>
                        </Prose>
                    </Container>
                </div>

                <div className='container mx-auto max-w-7xl'>
                    <div className='flex flex-col lg:flex-row gap-8 justify-center py-12'>
                        {/* LEFT - SIDEBAR */}
                        <Sidebar />
                        <div className='space-y-4'>
                            {posts.length > 0 ? (
                                <div className='grid md:grid-cols-2 gap-4'>
                                    {posts.map(post => (
                                        <PostCard key={post.id} post={post} />
                                    ))}
                                </div>
                            ) : (
                                <div className='h-24 w-full border rounded-lg bg-accent/25 flex items-center justify-center'>
                                    <p>No posts found</p>
                                </div>
                            )}

                            {totalPages > 1 && (
                                <div className='flex justify-center items-center py-8'>
                                    <Pagination>
                                        <PaginationContent>
                                            {page > 1 && (
                                                <PaginationItem>
                                                    <PaginationPrevious
                                                        href={createPaginationUrl(
                                                            page - 1
                                                        )}
                                                    />
                                                </PaginationItem>
                                            )}

                                            {Array.from(
                                                { length: totalPages },
                                                (_, i) => i + 1
                                            )
                                                .filter(pageNum => {
                                                    // Show current page, first page, last page, and 2 pages around current
                                                    return (
                                                        pageNum === 1 ||
                                                        pageNum ===
                                                            totalPages ||
                                                        Math.abs(
                                                            pageNum - page
                                                        ) <= 1
                                                    );
                                                })
                                                .map(
                                                    (pageNum, index, array) => {
                                                        const showEllipsis =
                                                            index > 0 &&
                                                            pageNum -
                                                                array[
                                                                    index - 1
                                                                ] >
                                                                1;
                                                        return (
                                                            <div
                                                                key={pageNum}
                                                                className='flex items-center'
                                                            >
                                                                {showEllipsis && (
                                                                    <span className='px-2'>
                                                                        ...
                                                                    </span>
                                                                )}
                                                                <PaginationItem>
                                                                    <PaginationLink
                                                                        href={createPaginationUrl(
                                                                            pageNum
                                                                        )}
                                                                        isActive={
                                                                            pageNum ===
                                                                            page
                                                                        }
                                                                    >
                                                                        {
                                                                            pageNum
                                                                        }
                                                                    </PaginationLink>
                                                                </PaginationItem>
                                                            </div>
                                                        );
                                                    }
                                                )}

                                            {page < totalPages && (
                                                <PaginationItem>
                                                    <PaginationNext
                                                        href={createPaginationUrl(
                                                            page + 1
                                                        )}
                                                    />
                                                </PaginationItem>
                                            )}
                                        </PaginationContent>
                                    </Pagination>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
