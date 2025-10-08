import { siteConfig } from '@/site.config';
import { NextResponse } from 'next/server';

export async function GET() {
  const urls = [
    {
      loc: `${siteConfig.site_domain}/services`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '0.9',
    },
    {
      loc: `${siteConfig.site_domain}/services/odoo-implementation-consulting/`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      loc: `${siteConfig.site_domain}/services/odoo-inventory-management-erp/`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      loc: `${siteConfig.site_domain}/services/odoo-training-by-teckzilla/`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      loc: `${siteConfig.site_domain}/services/odoo-support-by-teckzilla/`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      loc: `${siteConfig.site_domain}/services/odoo-migration/`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '0.8',
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
