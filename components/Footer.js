import React from "react"
import Link from "next/link"
import { HiArrowRight } from "react-icons/hi"
import Social from "./Social"

function Footer() {
  return (
    <>
      <footer className="container mx-auto py-10 md:container md:mx-auto sm:container sm:mx-auto">
        <div className="flex justify-center">
          <Social />
        </div>{" "}
        <div className="flex justify-center">
          {" "}
          2021
          <span> &#169; </span> Elements Web Developement & Design
        </div>
        <div className="flex justify-center"> All Rights Reserved</div>{" "}
      </footer>
    </>
  )
}

export default Footer
