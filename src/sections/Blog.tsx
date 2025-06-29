import { useEffect, useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { Document } from "@contentful/rich-text-types";
import { getBlogPosts } from "../data/contentful";
import type { Entry, EntrySkeletonType } from "contentful";
import { useTranslation } from "react-i18next";

// Типизация
type BlogPostFields = {
  title: string;
  publishDate: string;
  content: Document;
  youtubeUrl?: string;
};

type BlogPostSkeleton = EntrySkeletonType<BlogPostFields, "blogPost">;

export default function Blog() {
  const [posts, setPosts] = useState<Entry<BlogPostSkeleton>[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const { t } = useTranslation();

  useEffect(() => {
    getBlogPosts().then(setPosts);
  }, []);

  const activePost = activeIndex !== null ? posts[activeIndex] : null;
  const fields = activePost?.fields as BlogPostFields | undefined;

  return (
    <section className="px-6 py-10 min-h-screen max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <h2 className="text-3xl font-bold mb-4">{t('blog.title')}</h2>
        <p className="text-gray-600 mb-6">
          {t('blog.intro')}
        </p>
        <ul className="space-y-2">
          {posts.map((post, index) => {
            const { title, publishDate } = post.fields as BlogPostFields;
            const isActive = index === activeIndex;
            return (
              <li
                key={post.sys.id}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer p-3 rounded-lg transition border ${
                  isActive
                    ? "bg-yellow-100 border-yellow-400"
                    : "hover:bg-gray-100 border-transparent"
                }`}
              >
                <h3 className="font-semibold text-md">{title}</h3>
                <p className="text-sm text-gray-500">
                  {new Date(publishDate).toLocaleDateString()}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="md:col-span-2 sticky top-10 self-start bg-white p-6 rounded-xl shadow-md min-h-[400px]">
        {fields ? (
          <>
            <h3 className="text-2xl font-bold mb-2">{fields.title}</h3>
            <p className="text-sm text-gray-500 mb-4">
              {new Date(fields.publishDate).toLocaleDateString()}
            </p>
            <div className="prose max-w-none mb-4">
              {documentToReactComponents(fields.content)}
            </div>
            {fields.youtubeUrl && (
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${extractYouTubeId(
                    fields.youtubeUrl
                  )}`}
                  title="YouTube video"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                />
              </div>
            )}
          </>
        ) : (
          <p className="text-gray-500">
            {t('blog.select_prompt')}
          </p>
        )}
      </div>
    </section>
  );
}

function extractYouTubeId(url: string): string {
  try {
    const parsedUrl = new URL(url);
    return (
      parsedUrl.searchParams.get("v") ||
      parsedUrl.pathname.split("/").pop() ||
      ""
    );
  } catch {
    return "";
  }
}
