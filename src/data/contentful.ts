import { createClient } from 'contentful';
import type { Entry, EntrySkeletonType } from 'contentful';
import type { Document } from '@contentful/rich-text-types';

export type BlogPostFields = {
  title: string;
  publishDate: string;
  content: Document;
  youtubeUrl?: string;
};

export type BlogPostSkeleton = EntrySkeletonType<BlogPostFields, 'blogPost'>;

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export async function getBlogPosts(): Promise<Entry<BlogPostSkeleton>[]> {
  const entries = await client.getEntries<BlogPostSkeleton>({
    content_type: 'blogPost',
    order: ['-sys.createdAt'],
  });
  return entries.items;
}
