import React from "react"
import Animationlarge from "../components/animations/Animationlarge"

import {
  HiOutlineDesktopComputer,
  HiOutlineDeviceMobile,
  HiOutlineBookmark,
  HiArrowRight
} from "react-icons/hi"

function Solutions() {
  return (
    <>
      <section className="p-10">
        <h3 className="container mx-auto flex justify-center font-body text-4xl mb-10">
          Solutions
        </h3>
        <main className="grid grid-flow-col grid-cols-4 grid-rows-1 gap-2">
          <div className="bg-primary rounded p-2">
            <Animationlarge />
            <p className="flex flex-row gap-4 font-body text-neutral text-center text-2xl mb-10">
              Schedule a call
              <HiArrowRight className="text-neutral mt-1 transition duration-150 ease-in-out" />
            </p>
          </div>
          <div className="bg-white rounded p-10">
            <div className="flex flex-row">
              <HiOutlineDesktopComputer className="w-12 h-12 text-primary m-2" />
              <h3 className="text-small font-bold font-body mt-4 text-primary text-2xl">
                Web Development
              </h3>
            </div>
            <p className="font-body">
              Custom build website, tailored to client's specifications.
            </p>
          </div>
          <div className="bg-white rounded p-10">
            <div className=" flex flex-row">
              <HiOutlineDeviceMobile className="w-12 h-12 text-primary m-2" />
              <h3 className="text-small font-bold font-body mt-4 text-primary text-2xl">
                Mobile Development
              </h3>
            </div>
            <p className="font-body">
              Custom build mobile application that is simple and engaging.
            </p>
          </div>
          <div className="bg-white rounded p-10">
            <div className=" flex flex-row">
              <HiOutlineBookmark className="w-12 h-12 text-primary m-2" />
              <h3 className="text-small font-bold font-body mt-4 text-primary text-2xl">
                Progressive Web App
              </h3>
            </div>
            <p className="font-body">
              Custom web application with benefits of a moble experience.
            </p>
          </div>
        </main>
      </section>
    </>
  )
}

export default Solutions

/**
 *   <>
      <section className="grid grid-cols 4 gap-4">
        <h3 className="container mx-auto flex justify-center text-4xl p-12">
          Solutions
        </h3>

        <main className="container mx-auto grid grid-cols-3 gap-2 px-20 place-content-evenly">
          <div className="text-start">
            <div className="flex items-center justify-center">
              <svg className="text-7xl text-black opacity-70 pt-8">
                <HiOutlineDesktopComputer />
              </svg>
            </div>
            <p className="px-2 text-2xl pb-8">Web Development</p>
          </div>
          <div className="text-start">
            <div className="flex items-center justify-center">
              <svg className="text-7xl text-black opacity-70 pt-8">
                <HiOutlineDeviceMobile />
              </svg>
            </div>
            <p className="px-2 text-2xl pb-8">Mobile Development</p>
          </div>
          <div className="text-start">
            <div className="flex items-center justify-center">
              <svg className="text-7xl text-black opacity-70 pt-8">
                <HiOutlineBookmark />
              </svg>
            </div>
            <div className="text-start">
              <p className="px-2 text-2xl pb-8">Progressive Web App</p>
            </div>
          </div>
        </main>
      </section>
    </>
 */
