import Image from 'next/image'
import Link from 'next/link'

export function Header({
  dict: {
    metadata: { locale },
  },
}: {
  dict: typeof import('@/dictionaries/en.json')
}) {
  const lang = locale === 'en-US' ? '/' : `/${locale.split('-')[0]}`

  return (
    <header className="flex justify-between p-6">
      <Link href={`${lang}`}>
        <Image
          src="/me-logo.svg"
          alt="devjiwonchoi Logo"
          width={0}
          height={0}
          className="w-8 opacity-80 transition delay-150 ease-in-out hover:opacity-100"
        />
      </Link>
      <div className="flex items-center space-x-4">
        <Link
          href="https://github.com/devjiwonchoi"
          target="_blank"
          aria-label="devjiwonchoi's GitHub Profile"
          className="inline-block"
        >
          <Image
            src="/github-mark-white.svg"
            alt="GitHub Logo"
            width={0}
            height={0}
            className="h-7 w-7 opacity-80 transition delay-150 ease-in-out hover:opacity-100"
          />
        </Link>
        <Link
          href="mailto:devjiwonchoi@gmail.com"
          aria-label="devjiwonchoi's Gmail Address"
          className="inline-block"
        >
          <Image
            src="/gmail-2020.svg"
            alt="Gmail Logo"
            width={0}
            height={0}
            className="h-7 w-7 opacity-80 brightness-0 invert filter transition delay-150 ease-in-out hover:opacity-100"
          />
        </Link>
      </div>
    </header>
  )
}
