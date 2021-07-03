import React from "react"
import ContactForm from "../components/ContactForm"
import Animation from "../components/animations/Animation"

function Hero() {
  return (
    <>
      <div>
        <div className=" flex grid grid-cols-2 place-items-center container mx-auto">
          <div className="flex-1">
            <ContactForm />
          </div>
          <div className="flex-1 bg-primary border-8 border-tertiary">
            <Animation />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero

/**
 *  <div>
            <Image
              class="h-4 md:h-8"
              src="/elements_team_work.png"
              alt="Elements Image Team Work"
              title="Elements Web Development"
              width={600}
              height={400}
            />{" "}
          </div>
 */
