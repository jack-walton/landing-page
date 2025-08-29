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
        src="/headshot.png"
        alt="Jack Spencer Walton"
        width={1000}
        height={200}
        className="rounded-full mb-4"
      />

      <p className="mb-8">
        I'm a writer, researcher, and content designer currently based out of Kansas City.
      </p>

    </section>
  );
}