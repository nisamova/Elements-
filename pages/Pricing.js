import React from "react"
import Link from "next/link"
import AllPrices from "../components/AllPrices"

export default function Pricing() {
  return (
    <>
      <h1>Pricing Page</h1>
      <AllPrices />
      <div>
        <Link href="/">
          <a>Back to main Page</a>
        </Link>
      </div>
    </>
  )
}
