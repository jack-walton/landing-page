import { BlogPosts } from 'app/components/posts';
import Link from 'next/link';

export const metadata = {
  title: 'Blog',
  description: 'A collection of my work in UX design, documentation, and digital humanities.',
};

export default function Page() {
  return (
    <section className="max-w-xl mx-auto">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Blog</h1>
      <p className="mb-8">This blog is mostly notes and  about my web development projects.</p>

      <h2 className="font-semibold text-xl mb-4 tracking-tighter">Posts</h2>
      <BlogPosts />

    </section>
  );
}