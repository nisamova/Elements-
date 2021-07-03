import { GetServerSideProps } from "next"
import { loadStripe } from "@stripe/stripe-js"
import Stripe from "stripe"
import { createCheckoutSession } from "next-stripe/client"
import { HiBadgeCheck } from "react-icons/hi"

/*const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)*/

interface IPrice extends Stripe.Price {}

interface IProps {
  prices: IPrice[]
}

export default function AllPrices({ prices }: IProps) {
  const onClick = async (priceId: string) => {}

  return (
    <>
      <pre>{JSON.stringify(prices, null, 2)}</pre>

      <section className="p-20">
        <main className="grid grid-flow-col grid-cols-3 grid-rows-1 gap-10">
          <div className="bg-primary rounded p-10">
            {/** ---------PACKAGE 1 CORE CODE SPECIFICATION ------------------- */}
            <div>
              <h3 className="text-4xl font-bold font-body mt-4 mb-4 text-neutral">
                Core
              </h3>
              <p className="text-xl font-bold font-body mt-4 mb-4 text-white">
                Great For Small Businesses
              </p>
            </div>
            <div className="flex m-4 text-4xl text-white font-body">$899</div>
            <div className="flex flex-row">
              <HiBadgeCheck className="text-neutral m-1" />{" "}
              <p className="font-body text-l text-white mt-1">SEO</p>
            </div>
            <div className="flex flex-row">
              <HiBadgeCheck className="text-neutral m-1" />{" "}
              <p className="font-body text-l text-white mt-1">Blog</p>
            </div>
            <div className="flex flex-row">
              <HiBadgeCheck className="text-neutral m-1" />{" "}
              <p className="font-body text-l text-white mt-1">Contact Form</p>
            </div>
            <div className="flex flex-row">
              <HiBadgeCheck className="text-neutral m-1" />{" "}
              <p className="font-body text-l text-white mt-1">
                Up to 3 Social Media
              </p>
            </div>
            <div className="flex flex-row">
              <HiBadgeCheck className="text-neutral m-1" />{" "}
              <p className="font-body text-l text-white mt-1">Up to 6 pages</p>
            </div>
            <div className="flex flex-row">
              <HiBadgeCheck className="text-neutral m-1" />{" "}
              <p className="font-body text-l text-white mt-1">
                {" "}
                4 Hours Hands-on Training{" "}
              </p>
            </div>
            <div className="flex flex-row mt-8">
              <p className="font-body text-l text-white mt-1 font-bold text-neutral">
                Additional services available as an Add on Fee (Logo Design,
                Brochure, Infographic, Social Media Marketing Package)
              </p>
            </div>
            <p className="pt-12 pb-12">
              <button
                className="bg-neutral py-4 px-10 text-lg font-body border-6 border-black rounded"
                type="submit"
                role="link"
                /**onClick={handleClick}*/
              >
                Purchase Now
              </button>
            </p>
          </div>
          {/** ---------PACKAGE 2 PREMIUM CODE SPECIFICATION ------------------- */}
          <div className="bg-primary rounded p-10">
            <h3 className="text-4xl font-bold font-body mt-4 mb-4 text-neutral">
              Premium
            </h3>
            <div>
              <p className="text-xl font-bold font-body mt-4 mb-4 text-white">
                Great For Growing Businesses with better web exposure
              </p>
            </div>
            <div className="flex m-4 text-4xl text-white font-body">$1599</div>
            <div className="flex flex-row">
              <HiBadgeCheck className="text-neutral m-1" />{" "}
              <p className="font-body text-l text-white mt-1">
                Core Package Plus
              </p>
            </div>
            <div className="flex flex-row">
              <HiBadgeCheck className="text-neutral m-1" />{" "}
              <p className="font-body text-l text-white mt-1">
                Email Subscription
              </p>
            </div>
            <div className="flex flex-row">
              <HiBadgeCheck className="text-neutral m-1" />{" "}
              <p className="font-body text-l text-white mt-1">
                Google Analytics
              </p>
            </div>
            <div className="flex flex-row">
              <HiBadgeCheck className="text-neutral m-1" />{" "}
              <p className="font-body text-l text-white mt-1">
                Unlimited Social Media
              </p>
            </div>
            <div className="flex flex-row">
              <HiBadgeCheck className="text-neutral m-1" />{" "}
              <p className="font-body text-l text-white mt-1">Up to 15 pages</p>
            </div>
            <div className="flex flex-row">
              <HiBadgeCheck className="text-neutral m-1" />{" "}
              <p className="font-body text-l text-white mt-1">
                {" "}
                8 Hours Hands-on Training{" "}
              </p>
            </div>
            <div className="flex flex-row">
              <HiBadgeCheck className="text-neutral m-1" />{" "}
              <p className="font-body text-l text-white mt-1">Logo Design</p>
            </div>
            <div className="flex flex-row">
              <HiBadgeCheck className="text-neutral m-1" />{" "}
              <p className="font-body text-l text-white mt-1">
                Brochure/Infographic Design
              </p>
            </div>
            <p className="pt-12 pb-12">
              <button
                className="bg-neutral py-4 px-10 text-lg font-body border-6 border-black rounded"
                type="submit"
              >
                Purchase Now
              </button>
            </p>
          </div>
          {/** ---------PACKAGE 3 CUSTOM CODE SPECIFICATION ------------------- */}
          <div className="bg-primary rounded p-10">
            <h3 className="text-4xl font-bold font-body mt-4 mb-4 text-neutral">
              E-commerce
            </h3>
            <div>
              <p className="text-xl font-bold font-body mt-4 mb-4 text-white">
                Great For Small and Medium Businesses with online store
              </p>
            </div>
            <div className="flex m-4 text-4xl text-white font-body">
              $Custom Pricing
            </div>

            <div className="flex flex-row">
              <HiBadgeCheck className="text-neutral m-1" />{" "}
              <p className="font-body text-l text-white mt-1">
                Each E-commerce business is unique and requires custom build
              </p>
            </div>
            <p className="pt-12 pb-12">
              <button
                className="bg-neutral py-4 px-10 text-lg font-body border-6 border-black rounded"
                type="submit"
              >
                Contact Us
              </button>
            </p>
          </div>
        </main>
        {/**---------- Second Row Product 1-------------------------*/}
        <main className="grid grid-flow-col grid-cols-2 grid-rows-1 gap-6 mt-10">
          <div className="bg-primary rounded p-10">
            <h3 className="text-4xl font-bold font-body mt-4 mb-4 text-neutral">
              Custom Website Project
            </h3>
            <div>
              <p className="text-xl font-bold font-body mt-4 mb-4 text-white">
                Great for Large businesses
              </p>
            </div>
            <div className="flex m-4 text-4xl text-white font-body">
              $Custom Pricing
            </div>

            <div className="flex flex-row">
              <HiBadgeCheck className="text-neutral m-1" />{" "}
              <p className="font-body text-l text-white mt-1">
                Web Developements for complex businesses that require more
                support
              </p>
            </div>
            <p className="pt-12 pb-12">
              <button
                className="bg-neutral py-4 px-10 text-lg font-body border-6 border-black rounded"
                type="submit"
              >
                Contact Us
              </button>
            </p>
          </div>
          {/** Second Row Product 2 */}
          <div className="bg-primary rounded p-10">
            <h3 className="text-4xl font-bold font-body mt-4 mb-4 text-neutral">
              Mobile Developement & PWA
            </h3>
            <div>
              <p className="text-xl font-bold font-body mt-4 mb-4 text-white">
                Great for Small & Medium size businesses
              </p>
            </div>
            <div className="flex m-4 text-4xl text-white font-body">
              $Custom Pricing
            </div>

            <div className="flex flex-row">
              <HiBadgeCheck className="text-neutral m-1" />{" "}
              <p className="font-body text-l text-white mt-1">
                Mobile Developements requires custom build
              </p>
            </div>
            <p className="pt-12 pb-12">
              <button
                className="bg-neutral py-4 px-10 text-lg font-body border-6 border-black rounded"
                type="submit"
              >
                Contact Us
              </button>
            </p>
          </div>
        </main>
      </section>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const stripe = new Stripe(process.env.STRIPE_KEY, {
    apiVersion: "2020-08-27"
  })

  const prices = await stripe.prices.list({
    active: true,
    limit: 10,
    expand: []
  })

  return { props: { prices: prices.data } }
}

/** ------------------Alternative Way for Stripe TRIAL 1---------------- 
 * 
import React from "react"
import { HiBadgeCheck } from "react-icons/hi"
import { GetServerSideProps } from 'next'
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

function AllPrices() {
  const handleClick = async event => {
    const { sessionId } = await fetch("/api/checkout/session", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ quantity: 1 })
    }).then(res => res.json())
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCkeckout({ sessionId })
  }
  return (
    <section className="p-20">
      <main className="grid grid-flow-col grid-cols-3 grid-rows-1 gap-10">
        <div className="bg-primary rounded p-10">
          {/** ---------PACKAGE 1 CORE CODE SPECIFICATION ------------------- */
/** <div>
            <h3 className="text-4xl font-bold font-body mt-4 mb-4 text-neutral">
              Core
            </h3>
            <p className="text-xl font-bold font-body mt-4 mb-4 text-white">
              Great For Small Businesses
            </p>
          </div>
          <div className="flex m-4 text-4xl text-white font-body">$899</div>
          <div className="flex flex-row">
            <HiBadgeCheck className="text-neutral m-1" />{" "}
            <p className="font-body text-l text-white mt-1">SEO</p>
          </div>
          <div className="flex flex-row">
            <HiBadgeCheck className="text-neutral m-1" />{" "}
            <p className="font-body text-l text-white mt-1">Blog</p>
          </div>
          <div className="flex flex-row">
            <HiBadgeCheck className="text-neutral m-1" />{" "}
            <p className="font-body text-l text-white mt-1">Contact Form</p>
          </div>
          <div className="flex flex-row">
            <HiBadgeCheck className="text-neutral m-1" />{" "}
            <p className="font-body text-l text-white mt-1">
              Up to 3 Social Media
            </p>
          </div>
          <div className="flex flex-row">
            <HiBadgeCheck className="text-neutral m-1" />{" "}
            <p className="font-body text-l text-white mt-1">Up to 6 pages</p>
          </div>
          <div className="flex flex-row">
            <HiBadgeCheck className="text-neutral m-1" />{" "}
            <p className="font-body text-l text-white mt-1">
              {" "}
              4 Hours Hands-on Training{" "}
            </p>
          </div>

          <div className="flex flex-row mt-8">
            <p className="font-body text-l text-white mt-1 font-bold text-neutral">
              Additional services available as an Add on Fee (Logo Design,
              Brochure, Infographic, Social Media Marketing Package)
            </p>
          </div>
          <p className="pt-12 pb-12">
            <button
              className="bg-neutral py-4 px-10 text-lg font-body border-6 border-black rounded"
              type="submit"
              role="link"
              onClick={handleClick}
            >
              Purchase Now
            </button>
          </p>
        </div>
        {/** ---------PACKAGE 2 PREMIUM CODE SPECIFICATION ------------------- 

        <div className="bg-primary rounded p-10">
          <h3 className="text-4xl font-bold font-body mt-4 mb-4 text-neutral">
            Premium
          </h3>
          <div>
            <p className="text-xl font-bold font-body mt-4 mb-4 text-white">
              Great For Growing Businesses with better web exposure
            </p>
          </div>
          <div className="flex m-4 text-4xl text-white font-body">$1599</div>
          <div className="flex flex-row">
            <HiBadgeCheck className="text-neutral m-1" />{" "}
            <p className="font-body text-l text-white mt-1">
              Core Package Plus
            </p>
          </div>
          <div className="flex flex-row">
            <HiBadgeCheck className="text-neutral m-1" />{" "}
            <p className="font-body text-l text-white mt-1">
              Email Subscription
            </p>
          </div>
          <div className="flex flex-row">
            <HiBadgeCheck className="text-neutral m-1" />{" "}
            <p className="font-body text-l text-white mt-1">Google Analytics</p>
          </div>
          <div className="flex flex-row">
            <HiBadgeCheck className="text-neutral m-1" />{" "}
            <p className="font-body text-l text-white mt-1">
              Unlimited Social Media
            </p>
          </div>
          <div className="flex flex-row">
            <HiBadgeCheck className="text-neutral m-1" />{" "}
            <p className="font-body text-l text-white mt-1">Up to 15 pages</p>
          </div>
          <div className="flex flex-row">
            <HiBadgeCheck className="text-neutral m-1" />{" "}
            <p className="font-body text-l text-white mt-1">
              {" "}
              8 Hours Hands-on Training{" "}
            </p>
          </div>
          <div className="flex flex-row">
            <HiBadgeCheck className="text-neutral m-1" />{" "}
            <p className="font-body text-l text-white mt-1">Logo Design</p>
          </div>
          <div className="flex flex-row">
            <HiBadgeCheck className="text-neutral m-1" />{" "}
            <p className="font-body text-l text-white mt-1">
              Brochure/Infographic Design
            </p>
          </div>
          <p className="pt-12 pb-12">
            <button
              className="bg-neutral py-4 px-10 text-lg font-body border-6 border-black rounded"
              type="submit"
            >
              Purchase Now
            </button>
          </p>
        </div>
        {/** ---------PACKAGE 3 CUSTOM CODE SPECIFICATION ------------------- 

        <div className="bg-primary rounded p-10">
          <h3 className="text-4xl font-bold font-body mt-4 mb-4 text-neutral">
            E-commerce
          </h3>
          <div>
            <p className="text-xl font-bold font-body mt-4 mb-4 text-white">
              Great For Small and Medium Businesses with online store
            </p>
          </div>
          <div className="flex m-4 text-4xl text-white font-body">
            $Custom Pricing
          </div>

          <div className="flex flex-row">
            <HiBadgeCheck className="text-neutral m-1" />{" "}
            <p className="font-body text-l text-white mt-1">
              Each E-commerce business is unique and requires custom build
            </p>
          </div>
          <p className="pt-12 pb-12">
            <button
              className="bg-neutral py-4 px-10 text-lg font-body border-6 border-black rounded"
              type="submit"
            >
              Contact Us
            </button>
          </p>
        </div>
      </main>
      {/**---------- Second Row Product 1-------------------------
      <main className="grid grid-flow-col grid-cols-2 grid-rows-1 gap-6 mt-10">
        <div className="bg-primary rounded p-10">
          <h3 className="text-4xl font-bold font-body mt-4 mb-4 text-neutral">
            Custom Website Project
          </h3>
          <div>
            <p className="text-xl font-bold font-body mt-4 mb-4 text-white">
              Great for Large businesses
            </p>
          </div>
          <div className="flex m-4 text-4xl text-white font-body">
            $Custom Pricing
          </div>

          <div className="flex flex-row">
            <HiBadgeCheck className="text-neutral m-1" />{" "}
            <p className="font-body text-l text-white mt-1">
              Web Developements for complex businesses that require more support
            </p>
          </div>
          <p className="pt-12 pb-12">
            <button
              className="bg-neutral py-4 px-10 text-lg font-body border-6 border-black rounded"
              type="submit"
            >
              Contact Us
            </button>
          </p>
        </div>

        {/** Second Row Product 2 

        <div className="bg-primary rounded p-10">
          <h3 className="text-4xl font-bold font-body mt-4 mb-4 text-neutral">
            Mobile Developement & PWA
          </h3>
          <div>
            <p className="text-xl font-bold font-body mt-4 mb-4 text-white">
              Great for Small & Medium size businesses
            </p>
          </div>
          <div className="flex m-4 text-4xl text-white font-body">
            $Custom Pricing
          </div>

          <div className="flex flex-row">
            <HiBadgeCheck className="text-neutral m-1" />{" "}
            <p className="font-body text-l text-white mt-1">
              Mobile Developements requires custom build
            </p>
          </div>
          <p className="pt-12 pb-12">
            <button
              className="bg-neutral py-4 px-10 text-lg font-body border-6 border-black rounded"
              type="submit"
            >
              Contact Us
            </button>
          </p>
        </div>
      </main>
    </section>
  )
}

export default AllPrices
 * 
*/
