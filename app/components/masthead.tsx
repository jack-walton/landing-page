'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Masthead() {
    const pathname = usePathname();
  return (
    <h3 className="mb-8 text-5xl font-semibold tracking-tighter text-center border-gray-300">
       {pathname === '/' ? (
        'JACK WALTON'
      ) : (
        <Link href="https://jackwalton.xyz/">JACK WALTON</Link>
      )}
    </h3>
      )
}