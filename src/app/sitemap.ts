import { siteConfig } from '@/site.config';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticUrls: MetadataRoute.Sitemap = [
        {
            url: `${siteConfig.site_domain}/pages/sitemap.xml`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${siteConfig.site_domain}/services/sitemap.xml`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${siteConfig.site_domain}/blog/sitemap.xml`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    return [...staticUrls];
}
