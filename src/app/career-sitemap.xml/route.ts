import { siteConfig } from '@/site.config';
import { NextResponse } from 'next/server';

export async function GET() {
  // TODO: Add career pages when they are created
  // Currently empty as there are no career pages in the project
  const urls: Array<{
    loc: string;
    lastmod: string;
    changefreq: string;
    priority: string;
  }> = [];

  // Example structure for when career pages are added:
  // {
  //   loc: `${siteConfig.site_domain}/careers`,
  //   lastmod: new Date().toISOString(),
  //   changefreq: 'weekly',
  //   priority: '0.8',
  // },

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
