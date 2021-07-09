import React from "react"
import Link from "next/link"
import {
  TiSocialLinkedin,
  TiSocialFacebook,
  TiSocialPinterest,
  TiSocialTwitter
} from "react-icons/ti"

export default function Social() {
  return (
    <div>
      <ul className="flex flex-row gap-1">
        <li>
          <Link href="#">
            <TiSocialLinkedin className="text-2xl text-body font-normal mt-5" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <TiSocialFacebook className="text-2xl text-body font-normal mt-5" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <TiSocialPinterest className="text-2xl text-body font-normal mt-5" />
          </Link>
        </li>
        <li>
          <Link href="#">
            <TiSocialTwitter className="text-2xl text-body font-normal mt-5 mr-4" />
          </Link>
        </li>
      </ul>
    </div>
  )
}
