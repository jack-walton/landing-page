import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-5xl font-semibold tracking-tighter text-center border-gray-300">
        Notes
      </h1>
      <BlogPosts />
    </section>
  )
}
