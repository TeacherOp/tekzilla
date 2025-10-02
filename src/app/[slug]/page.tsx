import { Article, Container, Prose } from '@/components/craft';
import { Badge } from '@/components/ui/badge';
import { getCategoryById, getPostBySlug } from '@/lib/wordpress';
import { siteConfig } from '@/site.config';
import Balancer from 'react-wrap-balancer';

import Sidebar from '@/components/posts/Sidebar';
import { CalendarIcon } from 'lucide-react';
import type { Metadata } from 'next';

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
    const description = post.excerpt.rendered.replace(/<[^>]*>/g, '').trim();
    return {
        title: post.title.rendered,
        description,
        openGraph: {
            title: post.title.rendered,
            description,
            type: 'article',
            url: `${siteConfig.site_domain}/${post.slug}`,
        },
        twitter: {
            card: 'summary_large_image',
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
              post.categories.map((catId: number) => getCategoryById(catId))
          )
        : [];
    const media = post._embedded['wp:featuredmedia']?.find(
        (m: any) => m.id == post.featured_media
    );
    const date = new Date(post.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    });

    return (
        <div className='min-h-[100vh] bg-gray-50'>
            {/* HEADER */}
            <div className='bg-[#12336d] py-12'>
                <Container>
                    <Prose>
                        <h1 className='py-4 text-white'>
                            <Balancer>
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: post.title.rendered,
                                    }}
                                ></span>
                            </Balancer>
                        </h1>
                    </Prose>
                </Container>
            </div>

            {/* CONTENT & SIDEBAR */}
            <div className='container mx-auto max-w-[90rem]'>
                <div className='flex flex-col lg:flex-row  justify-center gap-8 py-12'>
                    {/* LEFT - ARTICLE */}
                    <div className=' min-w-0'>
                        {/* Feature Media */}
                        {media && media.source_url && (
                            <div className='mb-6 max-w-2xl rounded-xl overflow-hidden border bg-white'>
                                <img
                                    decoding='async'
                                    className='alignnone size-large wp-image-21414'
                                    width='1024'
                                    height='683'
                                    src={media.source_url}
                                    alt={
                                        post.title?.rendered || 'Featured media'
                                    }
                                    title={post.title?.rendered || ''}
                                    sizes='(min-width: 960px) 75vw, 100vw'
                                ></img>
                            </div>
                        )}
                        {/* Categories */}
                        {categories.length > 0 && (
                            <div className='mb-4 flex flex-wrap gap-2'>
                                <span className='flex items-center gap-2 rounded-md bg-white px-3 py-1 shadow text-xs text-gray-600 font-medium border border-gray-200'>
                                    <CalendarIcon className='w-4 h-4 text-primary' />
                                    <span>{date}</span>
                                </span>

                                {categories.map((cat: any) => (
                                    <Badge
                                        key={cat.id}
                                        className='bg-blue-50 text-[#12336d] px-3 py-1 rounded text-sm font-medium'
                                    >
                                        {cat.name}
                                    </Badge>
                                ))}
                            </div>
                        )}
                        <div className=' text-justify'>
                            <Article
                                dangerouslySetInnerHTML={{
                                    __html: post.content.rendered,
                                }}
                            />
                        </div>
                    </div>

                    {/* RIGHT - SIDEBAR */}
                    <Sidebar />
                </div>
            </div>
        </div>
    );
}
