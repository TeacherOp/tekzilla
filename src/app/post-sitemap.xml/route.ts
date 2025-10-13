import { getAllPostsForSitemap } from "@/lib/wordpress";
import { siteConfig } from "@/site.config";
import { NextResponse } from "next/server";

// Revalidate every 1 hour (3600 seconds)
export const revalidate = 3600;

export async function GET() {
  try {
    const posts = await getAllPostsForSitemap();

    const urls = [
      {
        loc: `${siteConfig.site_domain}/blog`,
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: "0.7",
      },
      ...posts.map((post) => ({
        loc: `${siteConfig.site_domain}/${post.slug}`,
        lastmod: new Date(post.modified).toISOString(),
        changefreq: "weekly",
        priority: "0.5",
      })),
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
  </url>`,
  )
  .join("\n")}
</urlset>`;

    return new NextResponse(xml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error) {
    console.error("Failed to fetch posts for sitemap:", error);

    // Return minimal sitemap with just blog page if WordPress is not accessible
    const fallbackXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteConfig.site_domain}/blog</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`;

    return new NextResponse(fallbackXml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=600, s-maxage=600",
      },
    });
  }
}
