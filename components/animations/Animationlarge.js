import React from "react"
import Lottie from "react-lottie"
import animationData from "./elemenents_web development_and_design_hero.json"

export default function Animation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <div>
      <Lottie options={defaultOptions} height={150} width={150} />
    </div>
  )
}
