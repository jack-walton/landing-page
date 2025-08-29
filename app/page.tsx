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

      <p className="mb-8">
        I'm a writer, researcher, and content designer currently based out of Kansas City.
      </p>



    <div data-theme="system" style={{ maxWidth: '500px', margin: '0 auto' }}>
      <Tweet id="1858197154772250842" />
    </div>


      <Image
        src="/headshot.png"
        alt="Jack Spencer Walton"
        width={350}
        height={200}
        className="rounded-full mb-4"
      />

    </section>
  );
}