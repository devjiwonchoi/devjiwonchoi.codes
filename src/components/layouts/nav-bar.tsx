import Link from 'next/link'

const navItems = [
  { path: '/', name: '::1' },
  { path: '/blog', name: 'blog' },
  { path: '/lab', name: 'lab' },
]

export function NavBar() {
  return (
    <nav className="p-6">
      <ul className="flex justify-center space-x-6">
        {navItems.map(({ path, name }) => (
          <li key={path}>
            <Link
              className="relative m-1 flex py-1 px-2 align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
              href={path}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
