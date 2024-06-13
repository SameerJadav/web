import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: "Sameer's blog",
    description:
      "A tech-savvy blog offering coding insights, programming tutorials, and personal anecdotes.",
    site: context.site,
    stylesheet: "/pretty-feed-v3.xsl",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/blogs/${post.slug}`,
    })),
  });
}
