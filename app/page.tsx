import { BlogPosts } from 'app/components/posts';


export const metadata = {
  title: 'Jack Walton',
  description: 'A collection of my work in UX design, documentation, and digital humanities.',
};

export default function Page() {
  return (
    <section className="max-w-xl mx-auto">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Jack Spencer Walton</h1> 
       

  <p className="mb-8">I'm a technical writer at Oracle Design. I graduated from the University of Missouri - Kansas City with a BA in English Language and Literature and a minor in Medieval and Early Modern Studies.</p>

    <p className="mb-8">Before I joined Oracle, I worked as research assistant at the university's and picked up work in the archives at the Kansas City Public Library.</p>
      
      <p className="mb-8">Obsessions include: clear copy, information architecture, continental literature, and ambient techno.</p>
  
  <h2 className="font-semibold text-xl mb-4 tracking-tighter">Thoughts</h2>

  <BlogPosts />
    </section>
  );
}