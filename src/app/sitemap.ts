import { GetPostsForSitemap } from "@/app/actions/seo/get-post-sitemap";
import { SITE_URL } from "@/utils/consts";
import { headers } from "next/headers";

export default async function sitemap() {
  const headersList = await headers();
  const host = await headersList.get("host");
  const proto = await headersList.get("x-forwarded-proto");

  function formatDateForSitemap(dateString: string) {
    const date = new Date(dateString);
    return date.toISOString(); // Convert to ISO 8601 format
  }

  const posts = await GetPostsForSitemap();

  const res: any = posts.data.map((post: any) => {
    return {
      url: `${proto}://${host}${SITE_URL.PRODUCT}/${post.id}`,
      lastModified: formatDateForSitemap(post.createdAt),
      changeFrequency: "weekly",
      priority: 0.8,
    };
  });

  return [
    {
      url: `${proto}://${host}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...res,
  ];
}
