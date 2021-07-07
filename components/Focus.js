import React from "react"
import Link from "next/link"
import { HiArrowRight } from "react-icons/hi"

function Focus() {
  return (
    <>
      <Link href="#">
        <a>
          <p className="flex flex-row gap-4 font-body text-neutral text-center text-2xl mb-10 border-2 px-4 border-neutral">
            Schedule a call
            <HiArrowRight className="text-neutral mt-1 transition duration-150 ease-in-out" />
          </p>
        </a>
      </Link>
    </>
  )
}

export default Focus
