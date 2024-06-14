import Image from 'next/image'
import Link from 'next/link'
import { SignedIn, UserButton } from '@clerk/nextjs'

export function Header() {
  return (
    <header className="my-4 flex justify-between md:my-8">
      <Link href="/" className="flex w-fit flex-col" title="link back to home">
        <span className="text-2xl font-bold">Jiwon Choi</span>
        <span className="text-neutral-200">software engineer</span>
      </Link>
      <div className="flex items-center space-x-4">
        <SignedIn>
          <UserButton />
        </SignedIn>
        {/* GitHub */}
        <Link
          href="https://github.com/devjiwonchoi"
          target="_blank"
          aria-label="Jiwon Choi's GitHub Profile"
          className="inline-block"
        >
          <Image
            src={'/img/github-mark-white.svg'}
            width={24}
            height={24}
            alt="GitHub Logo"
            className=""
          />
        </Link>
        {/* X */}
        <Link
          href="https://x.com/devjiwonchoi"
          target="_blank"
          aria-label="Jiwon Choi's X Profile"
          className="inline-block"
        >
          <Image
            src={'/img/x-logo.svg'}
            width={20}
            height={20}
            alt="X Logo"
            className="invert"
          />
        </Link>
      </div>
    </header>
  )
}
