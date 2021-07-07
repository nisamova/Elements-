import React from "react"
import Link from "next/link"
import { HiArrowRight } from "react-icons/hi"

function Footer() {
  return (
    <>
      <footer className="container mx-auto grid grid-flow-row place-content-center h-48">
        <div className="text-center">
          {" "}
          2021
          <span> &#169; </span> Elements Web Developement & Design
        </div>
        <div className="text-center"> All Rights Reserved</div>
      </footer>
    </>
  )
}

export default Footer
