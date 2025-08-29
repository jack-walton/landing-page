import Image from 'next/image';
import { Tweet } from 'react-tweet';
import { PostThread } from "react-bluesky-embed";

export const metadata = {
  title: 'Jack Walton',
  description: 'A collection of my work in UX design, documentation, and digital humanities.',
};

export default function Page() {
  return (
    <section className="max-w-xl mx-auto">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Jack Spencer Walton</h1>

      <Image
        src="/headshot.jpg"
        alt="Jack Spencer Walton"
        width={200}
        height={200}
        className="rounded-full mb-4"
      />

      <p className="mb-8">
        I'm a writer, researcher, and content designer currently based out of Kansas City.
      </p>

      <h2 className="font-semibold text-xl mb-4 tracking-tighter">Follow me on Twitter</h2>
      <Tweet id="1858197154772250842" fallback={<p>Unable to load tweet.</p>} width="100%" />

      <h2 className="font-semibold text-xl mb-4 tracking-tighter">Follow me on Bluesky</h2>
      <PostThread
      params={{
        did: "did:plc:pq6i4provjmntc3dcr25d2tf",
        rkey: "3lb77sszijs2b",
      }}
      theme="system"
    />
    </section>
  );
}