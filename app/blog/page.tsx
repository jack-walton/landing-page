import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Notes</h1>
      <p></p>
      <BlogPosts />
    </section>
  )
}
