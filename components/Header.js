import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full">
      <Head>
        <title>Elements Web Development & Design</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="icon" href="/Logos/elemenents_favicon.png" />
      </Head>
      <ul className="flex flex-row container mx-auto pt-2">
        <li>
          <Link href="/">
            <a>
              <Image
                className="h-4 md:h-8"
                src="/Logos/elemenents_favicon.png"
                alt="Elements Logo"
                title="Elements logo"
                width={40}
                height={40}
              />
            </a>
          </Link>
        </li>
        <li className="text-black font-body text-3xl text-center pl-2 pt-1">
          <Link href="/">
            <a>Elements</a>
          </Link>
        </li>
      </ul>
    </header>
  )
}
/**
 * <container standard width
        className="container mx-auto"

 */
