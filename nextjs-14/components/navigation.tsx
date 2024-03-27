'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link href={`/`}>Home {pathname === '/' && <span>🏠</span>}</Link>
        </li>
        <li>
          <Link href={`/about-us`}>
            About Us{pathname === '/about-us' && <span>🙋</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
