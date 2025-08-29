# Portfolio

This is a professional portfolio built to display my work, host technical blog posts, and provide links to my social media and contact information. This application was developed based on the Vercel Portfolio Starter Kit (https://vercel.com/templates/next.js/portfolio-starter-kit).

## Technology

- **Framework**: Next.js (canary version)
- **Styling**: Tailwind CSS (v4.0.0-alpha.13)
- **Language**: TypeScript (v5.3.3)
- **Content**: MDX through `next-mdx-remote` for blog posts
- **Analytics**: Vercel Analytics and Speed Insights for performance tracking
- **Syntax Highlighting**: `sugar-high` for code blocks in blog posts
- **Fonts**: Geist for typography
- **Build Tool**: PostCSS for CSS processing

## Requirements

- [Node.js](https://nodejs.org/) (v14.17 or higher)
- [npm](https://www.npmjs.com/)

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/jack-walton/blog.git
   cd blog
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open http://localhost:3000 to view the app.

## Project Structure

- `app/`: Next.js pages
- `app/components/`: React components for blog layout and MDX processing
- `app/blog/posts`: MDX files for blog post
- `public/`: Static assets (images, icons)
- `app/projects/page.tsx`: Projects portfolio




