import { getAllPostsPaginated } from '@/lib/wordpress';
import { siteConfig } from '@/site.config';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await getAllPostsPaginated();

    const staticUrls: MetadataRoute.Sitemap = [
        {
            url: `${siteConfig.site_domain}/blog`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    const postUrls: MetadataRoute.Sitemap = posts.map(post => ({
        url: `${siteConfig.site_domain}/${post.slug}`,
        lastModified: new Date(post.modified),
        changeFrequency: 'weekly',
        priority: 0.5,
    }));

    return [...staticUrls, ...postUrls];
}
