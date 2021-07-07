import React from "react"
import Focus from "./Focus"
import Footer from "./Footer"
import Header from "./Header"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col justify center container max-w-screen-2xl mx-auto">
        <Header />
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  )
}
