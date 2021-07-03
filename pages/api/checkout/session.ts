import { NextApiRequest, NextApiResponse } from "next"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  /*res.status(200).json({name: 'John Doe'})**/
  apiVersion: "2020-08-27"
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { quantity } = req.body
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price: process.env.PRICE_ID,
        quantity
      }
    ],
    mode: "payment",
    success_url: "pages/Success.js",
    /**"${req.headers.origin}/result? session_id={CHECKOUT_SESSION_ID}",**/
    cancel_url: "pages/Pricing.js"
    /**"${req.headers.origin}/checkout" **/
  })
  res.status(200).json({ sessionId: session.id })
}
/**
 * req: NextApiRequest,
  res: NextApiResponse
) {
  const id: string = req.query.id as string
  try {
    if (!id.startsWith("cs_")) {
      throw Error("Incorrect CheckoutSession ID.")
    }
    const checkout_session: Stripe.Checkout.Session =
      await stripe.checkout.sessions.retrieve(id, {
        expand: ["payment_intent"]
      })

    res.status(200).json(checkout_session)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

 */
