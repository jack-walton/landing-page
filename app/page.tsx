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

      <h2 className="font-semibold text-xl mb-4 tracking-tighter">Check out my favorite album right now</h2>
      <div className="mb-8">
      <iframe style={{ border: 0, width: '100%', height: '120px' }} src="https://bandcamp.com/EmbeddedPlayer/album=4200695786/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://reptilemusic.bandcamp.com/album/gloria-de-oliveira-fascination-compilation-album">GLORIA DE OLIVEIRA - Fascination (Compilation Album) by GLORIA DE OLIVEIRA</a></iframe>
      </div>

      <h2 className="font-semibold text-xl mb-4 tracking-tighter">Check out my latest playlist</h2>
          
      <div className="mb-8">
          <iframe
      data-testid="embed-iframe"
      style={{ borderRadius: '12px' }}
      src="https://open.spotify.com/embed/playlist/47CsxQufK0enHxi3akbiO1?utm_source=generator"
      width="100%"
      height="352"
      frameBorder="0"
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
    </div>

    </section>
  );
}