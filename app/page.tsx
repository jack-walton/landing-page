import Link from 'next/link';
import Image from 'next/image'

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

      <h2 className="font-semibold text-xl mb-4 tracking-tighter">Favorite album right now</h2>
      <iframe
      style={{ border: 0, width: '350px', height: '470px' }}
      src="https://bandcamp.com/EmbeddedPlayer/album=4200695786/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/transparent=true/"
      seamless
    >
      <a href="https://reptilemusic.bandcamp.com/album/gloria-de-oliveira-fascination-compilation-album">
        GLORIA DE OLIVEIRA - Fascination (Compilation Album) by GLORIA DE OLIVEIRA
      </a>
    </iframe>

    </section>
  );
}