import { getAllPostsPaginated } from '@/lib/wordpress';
import { siteConfig } from '@/site.config';
import { MetadataRoute } from 'next';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticUrls: MetadataRoute.Sitemap = [
        {
            url: `${siteConfig.site_domain}/blog`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    try {
        const posts = await getAllPostsPaginated();

        const postUrls: MetadataRoute.Sitemap = posts.map(post => ({
            url: `${siteConfig.site_domain}/${post.slug}`,
            lastModified: new Date(post.modified),
            changeFrequency: 'weekly',
            priority: 0.5,
        }));

        return [...staticUrls, ...postUrls];
    } catch (error) {
        console.error('Failed to fetch posts for sitemap:', error);
        // Return static URLs only if WordPress is not accessible
        return staticUrls;
    }
}
