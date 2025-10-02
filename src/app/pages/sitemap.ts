import { siteConfig } from '@/site.config';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticUrls: MetadataRoute.Sitemap = [
        // Main pages
        {
            url: `${siteConfig.site_domain}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${siteConfig.site_domain}/case-studies`,
            lastModified: new Date('2024-08-15T00:00:00Z'), // update date as needed
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${siteConfig.site_domain}/contact-us`,
            lastModified: new Date('2024-08-10T00:00:00Z'), // update date as needed
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${siteConfig.site_domain}/after-sales`,
            lastModified: new Date('2024-08-10T00:00:00Z'), // update date as needed
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${siteConfig.site_domain}/services/sitemap.xml`,
            lastModified: new Date('2024-08-10T00:00:00Z'), // update date as needed
            changeFrequency: 'monthly',
            priority: 0.7,
        },

        // Industry pages
        {
            url: `${siteConfig.site_domain}/education-industry`,
            lastModified: new Date('2024-08-10T00:00:00Z'), // update date as needed
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${siteConfig.site_domain}/health-industry`,
            lastModified: new Date('2024-08-10T00:00:00Z'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${siteConfig.site_domain}/hospitality-industry`,
            lastModified: new Date('2024-08-10T00:00:00Z'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${siteConfig.site_domain}/manufacturing-industry`,
            lastModified: new Date('2024-08-10T00:00:00Z'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${siteConfig.site_domain}/retail-industry`,
            lastModified: new Date('2024-08-10T00:00:00Z'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${siteConfig.site_domain}/service-industry`,
            lastModified: new Date('2024-08-10T00:00:00Z'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${siteConfig.site_domain}/telecom-industry`,
            lastModified: new Date('2024-08-10T00:00:00Z'),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
    ];

    return [...staticUrls];
}
