export const baseUrl = 'https://jackwalton.xyz'

export default async function sitemap() {

  let routes = ['', '/projects'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return routes
}