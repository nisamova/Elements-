import React from "react"
import Lottie from "react-lottie"
import animationData from "./lf30_editor_me2qocef.json"

export default function Animation() {
  const defaultOptions = {
    loop: 1,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <div>
      <Lottie options={defaultOptions} height={300} width={550} />
    </div>
  )
}
