import { siteConfig } from '@/site.config';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticUrls: MetadataRoute.Sitemap = [
        {
            url: `${siteConfig.site_domain}/services`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${siteConfig.site_domain}/services/odoo-implementation-consulting/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${siteConfig.site_domain}/services/odoo-inventory-management-erp/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${siteConfig.site_domain}/services/odoo-training-by-teckzilla/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${siteConfig.site_domain}/services/odoo-support-by-teckzilla/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${siteConfig.site_domain}/services/odoo-migration/`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];
    return [...staticUrls];
}
