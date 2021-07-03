import React from "react"
import { SiWordpress, SiGatsby, SiNextDotJs, SiReact } from "react-icons/si"

function Technology() {
  return (
    <>
      <h4 className="container mx-auto flex justify-center text-4xl p-12">
        {" "}
        Technology Stack
      </h4>
      <main className=" container mx-auto px-4 flex justify-start gap-8">
        <div className="flex flex-row text-2xl">
          <SiWordpress />
          <p className="text-2xl pl-2">Wordpress</p>
        </div>
        <div className="flex flex-row text-2xl">
          <SiReact />
          <p className="text-2xl pl-2">React.js</p>
        </div>
        <div className="flex flex-row text-2xl">
          <SiGatsby />
          <p className="text-2xl pl-2">Gatsby.js</p>
        </div>
        <div className=" flex flex-row text-2xl">
          <SiNextDotJs />
          <p className="text-2xl pl-2">Next.js</p>
        </div>
      </main>
    </>
  )
}

export default Technology
