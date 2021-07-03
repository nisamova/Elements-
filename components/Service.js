import React from "react"

function Service() {
  return (
    <>
      <h2 className="container mx-auto flex justify-center text-4xl p-12">
        Services
      </h2>
      <main className="container mx-auto grid grid-cols-6 gap-2 px-20 place-content-evenly">
        <div className="border-4 border-neutral text-center">
          <p className="p-4 text-2xl">Consulting</p>
          <p className="p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="border-4 border-neutral text-center">
          <p className="p-4 text-2xl">Designing</p>
          <p className="p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="border-4 border-neutral text-center">
          <p className="p-4 text-2xl">Building</p>
          <p className="p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="border-4 border-neutral text-center">
          <p className="p-4 text-2xl">Integrating</p>
          <p className="p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="border-4 border-neutral text-center">
          <p className="p-4 text-2xl">Scaling</p>
          <p className="p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="border-4 border-neutral text-center">
          <p className="p-4 text-2xl">Maintaining</p>
          <p className="p-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </main>
    </>
  )
}

export default Service
