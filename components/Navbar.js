import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Navbar(props) {
  return (
    <ul className="flex justify-end text-center space-x-6 max-w-screen-2xl p-8">
      <li className="text-lg font-body text-black">
        <Link href="/Services">
          <a>Services</a>
        </Link>
      </li>
      <li className="text-lg font-body text-black">
        <Link href="/Pricing">
          <a>Pricing</a>
        </Link>
      </li>
      <li className="text-lg font-body text-black">
        <Link href="/Resources">
          <a>Resources</a>
        </Link>
      </li>
      <li className="text-lg font-body text-black">
        <Link href="/Blog">
          <a>Blog</a>
        </Link>
      </li>
    </ul>
  )
}

/**
 * href="/elements_favicon_transparent_nude.png"
 */
/**
      <nav className="flex justify-between items-center p-4">
        <p className="text-2xl font-bold text-grey-900">Elements</p>
        <div>
          <a
            href="/"
            className="bg-primary hover:bg-tertiary text-white py-4 px-10"
          >
            Pricing
          </a>
        </div>
      </nav>{" "}

//////////////////////////////-------NEW----------------////////////////
<button className="inline-block md:hidden w-8 h-8 bg-gray-200 text-gray-600 p-1">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <nav className="absolute md:relative top-16 left-0 md:top-0 z-20 flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0 ">
          <Link href="/" className="block py-1 text-indigo-600 hover:underline">
            <a>Home</a>{" "}
          </Link>

          <Link href="/" className="block py-1 text-gray-600 hover:underline">
            <a>About us</a>
          </Link>

          <Link href="/" className="block py-1 text-gray-600 hover:underline">
            <a>Services</a>
          </Link>
          <Link href="/" className="block py-1 text-gray-600 hover:underline">
            <a> Blog</a>
          </Link>
          <Link href="/" className="block py-1 text-gray-600 hover:underline">
            <a>Contact</a>
          </Link>
          ////////////////--------MOST RECENT----------/////////////////////
           <>
      <nav className="bg-primary flex flex-wrap flex-row justify-between md:items-center md:space-x-2 py-4 px-10 relative">
        <div>
          <p className="text-2xl font-bold text-grey-900">Elements</p>
        </div>
        <Link href="/" className="block py-1 text-gray-600 hover:underline">
          <a>About</a>
        </Link>
        <Link href="/" className="block py-1 text-gray-600 hover:underline">
          <a>Pricing</a>
        </Link>
      </nav>
    </>

      */
