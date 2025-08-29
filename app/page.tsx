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

    </section>
  );
}