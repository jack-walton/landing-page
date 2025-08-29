import { BlogPosts } from 'app/components/posts';
import Link from 'next/link';

export const metadata = {
  title: 'Projects',
  description: 'A collection of my work in UX design, documentation, and digital humanities.',
};

export default function Page() {
  return (
    <section className="max-w-xl mx-auto">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Projects</h1>
      <p className="mb-8">This site is built with Next.js and Tailwind CSS and deployed on Vercel. The source code is available on GitHub.</p>

      <h2 className="font-semibold text-xl mb-4 tracking-tighter">Notes</h2>
      <BlogPosts />

    </section>
  );
}