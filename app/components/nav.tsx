import Link from 'next/link'

const navItems = {
  '/': {
    name: 'about',
  },
  '/projects': {
    name: 'projects',
  },
}

export function Navbar() {
  return (
    <aside className="mb-4 mt-4 tracking-tighter border-b-1 border-t-1 border-gray-300 py-4"> {/* Removed -ml-[8px] to avoid offset */}
      
        <nav
          className="flex flex-row relative px-0 pb-0 fade md:overflow-auto md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-4"> {/* Simplified, removed pr-10 */}
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      
    </aside>
  )
}