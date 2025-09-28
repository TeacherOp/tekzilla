import { getAllPostSlugs, getPostBySlug } from '@/lib/wordpress';

import { Article, Container, Prose, Section } from '@/components/craft';
import { siteConfig } from '@/site.config';

import Balancer from 'react-wrap-balancer';

import type { Metadata } from 'next';

export async function generateStaticParams() {
    return await getAllPostSlugs();
}

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

    // const ogUrl = new URL(`${siteConfig.site_domain}/api/og`);
    // ogUrl.searchParams.append('title', post.title.rendered);
    // Strip HTML tags for description
    const description = post.excerpt.rendered.replace(/<[^>]*>/g, '').trim();
    // ogUrl.searchParams.append('description', description);

    return {
        title: post.title.rendered,
        description: description,
        openGraph: {
            title: post.title.rendered,
            description: description,
            type: 'article',
            url: `${siteConfig.site_domain}/posts/${post.slug}`,
            // images: [
            //     {
            //         url: ogUrl.toString(),
            //         width: 1200,
            //         height: 630,
            //         alt: post.title.rendered,
            //     },
            // ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title.rendered,
            description: description,
            // images: [ogUrl.toString()],
        },
    };
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    return (
        <Section>
            <Container>
                <Prose>
                    <h1 className='py-4'>
                        <Balancer>
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: post.title.rendered,
                                }}
                            ></span>
                        </Balancer>
                    </h1>
                </Prose>

                <Article
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                />
            </Container>
        </Section>
    );
}
