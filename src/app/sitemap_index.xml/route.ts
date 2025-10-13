import { siteConfig } from "@/site.config";
import { NextResponse } from "next/server";

export async function GET() {
  const sitemaps = [
    {
      loc: `${siteConfig.site_domain}/post-sitemap.xml`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${siteConfig.site_domain}/page-sitemap.xml`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${siteConfig.site_domain}/career-sitemap.xml`,
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${siteConfig.site_domain}/services-sitemap.xml`,
      lastmod: new Date().toISOString(),
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (sitemap) => `  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
  </sitemap>`,
  )
  .join("\n")}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
