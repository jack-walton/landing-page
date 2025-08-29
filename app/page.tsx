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
       
   <p>
    I'm a writer, researcher, and content designer. For the last four years, I've worked as a technical writer for the UX Design organization at Oracle, where I work on user assistance documentation and write user interface copy for healthcare products. I graduated <em>magna cum laude</em> from the University of Missouri - Kansas City with a BA in English and a minor in medieval and early modern studies. While in school, I worked as a research assistant for CODICES Digital Humanities Lab.
  </p>

<div data-theme="system" className="tweet-container">
      <Tweet
        id="1858197154772250842"
      />
    </div>
    </section>
  );
}