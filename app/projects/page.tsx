import Link from 'next/link';

export const metadata = {
  title: 'Projects',
  description: 'A collection of my work in UX design, documentation, and digital humanities.',
};

export default function Page() {
  return (
    <section className="max-w-xl mx-auto">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Projects</h1>

      <p className="mb-8">This site is built with Next.js and Tailwind CSS and deployed on Vercel. The source code is available on{' '}
        <Link
          href="https://github.com/jack-walton/blog"
          className="underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2 decoration-[0.1em] transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Link>.
      </p>

      <h2 className="font-semibold text-xl mb-4 tracking-tighter">Oracle Health</h2>
      <p className="mb-8">
        I'm on the design team working to develop the next generation of healthcare products at{' '}
        <Link
          href="https://www.oracle.com/health/"
          className="underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2 decoration-[0.1em] transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          Oracle
        </Link>.
        My work focuses on writing user interface copy and designing user assistance documentation. I joined Oracle through its{' '}
        <Link
          href="https://www.oracle.com/news/announcement/oracle-buys-cerner-2021-12-20/"
          className="underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2 decoration-[0.1em] transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          acquisition of Cerner
        </Link>.
        This project is ongoing.
      </p>

      <h2 className="font-semibold text-xl mb-4 tracking-tighter">Documentation</h2>
      <p className="mb-8">
        I created this{' '}
        <Link
          href="https://docs.jackwalton.xyz"
          className="underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2 decoration-[0.1em] transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          documentation
        </Link>{' '}
        site using Next.js with the Nextra theme. The site currently includes some case studies in user assistance documentation.</p>

      <h2 className="font-semibold text-xl mb-4 tracking-tighter">
        CODICES Digital Humanities Lab
      </h2>
      <p className="mb-8">
        I published a peer-reviewed{' '}
        <Link
          href="https://differentvisions.org/homage-to-medieval-langres/"
          className="underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2 decoration-[0.1em] transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          art history article
        </Link>{' '}
        while working as a research assistant at the University of Missouri - Kansas City. This project involved both {' '}
        <Link
          href="https://daedalus.umkc.edu/CODICES/royer-walton.html"
          className="underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2 decoration-[0.1em] transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          qualitative and quantitative research methods
        </Link>. I coauthored this article with my research mentor,{' '}
        <Link
          href="https://shss.umkc.edu/profiles/english/virginia-blanton.html"
          className="underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2 decoration-[0.1em] transition-all"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dr. Virginia Blanton
        </Link>.
      </p>

    </section>
  );
}