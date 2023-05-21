import rss from '@astrojs/rss';
import type { AstroGlobal } from "astro";
import { getLanguageRespectingPath } from '../../../../localization';

export const get = async (astro: AstroGlobal) => {
    let language = await getLanguageRespectingPath(astro.params);
    const posts = (Object.values(import.meta.glob("../../../../posts/announcements/**/*.{md,mdx}", { eager: true }))).sort(
        (post: any) => post.frontmatter.pubDate
    ).filter((post: any) => {
        let lastSlashIdx = post.file.lastIndexOf('/');
        let parentDir = post.file.substring(0, lastSlashIdx);

        let slashBeforeLanguageIdx = parentDir.lastIndexOf('/');
        let l = parentDir.substring(slashBeforeLanguageIdx + 1);

        return l == language?.identifier;
    });

    return rss({
        title: `DeepRobin.DE > ${language?.getByKey("blog.announcements.name")}`,
        description: language?.getByKey("blog.announcements.rss.description")!,
        site: "https://deeprobin.de/" + language?.identifier + "/blog/announcements",
        items: posts.map((post: any) => ({
            link: post.url,
            title: post.frontmatter.title,
            pubDate: post.frontmatter.pubDate,
        })),
        stylesheet: "/feed.xsl",
    });
}