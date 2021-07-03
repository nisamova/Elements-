import React from "react"
import { HiArrowRight } from "react-icons/hi"

export default function ContactForm() {
  return (
    <>
      <h1 className="text-5xl text-black font-body pb-4">
        Custom
        <br />
        Web development & design
      </h1>
      <p className="font-body text-2xl font-bold text-neutral">
        {" "}
        At Elements, we build modern, user-friendly, fast websites.
      </p>
      <form
        className="flex-col space-y-1 font-body pb-10"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <div hidden>
          <input name="bot-field" />
        </div>
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="youremail"></label> <br />
          <input
            className="border-2 border-black rounded font-body h-12 w-72"
            type="email"
            name="email"
            id="youremail"
            placeholder=" Email..."
          />
        </p>
        <p>
          <label htmlFor="yourmessage"></label> <br />
          <textarea
            className="border-2 border-black rounded font-body h-12 w-72"
            name="message"
            id="yourmessage"
            placeholder=" Message..."
          ></textarea>
        </p>{" "}
        <br />
        <div className="flex flex-row">
          <button
            className="bg-neutral py-4 px-10 text-lg font-body border-6 border-black rounded"
            type="submit"
          >
            Contact Us
          </button>
        </div>
      </form>
    </>
  )
}

/** 
 * --------------------------SKINNY BUTTON ------------------------
 *  <li>
        <button
          className="bg-primary py-2 px-8 text-lg border-2 border-neutral"
          type="submit"
        >
          Contact Us
        </button>
      </li>
 */

/**
 * ---------------NAME AND WEBSITE INPUT FIELDS--------------
 * <p>
        <input type="text" name="firstname" id="firstname" />
        <label htmlFor="yourname"></label> <br />
        <input
          className="border-2 border-neutral h-12 w-72"
          type="text"
          name="name"
          id="yourname"
          placeholder=" Your Name..."
        />
      </p>
      <p>
        <input type="text" name="firstname" id="firstname" />
        <label htmlFor="website name"></label> <br />
        <input
          className="border-2 border-neutral h-12 w-72"
          type="text"
          name="website-name"
          id="website"
          placeholder=" Website..."
        />
      </p>
 */
