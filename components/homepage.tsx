/**
 * v0 by Vercel.
//  * @see https://v0.dev/t/WZxZWb4JsdT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Link from "next/link"
import { JSX, SVGProps } from "react"
import img1 from "@/app/assets/img1.jpeg"
import { Skeleton } from "./ui/skeleton"
import Welcome from "./content/welcome"


import Scheduleoff from "./content/scheduleoff"
import Scheduleon from "./content/scheduleon"

import Venue from "./content/venue"
import { AnimatedPinDemo, AnimatedTooltipPreview, BentoGridThirdDemo, CardHoverEffectDemo, FollowingPointerDemo, ParallaxScrollSecondDemo, TypewriterEffectSmoothDemo } from "@/app/(main)/(routes)/events/page"
import { AnimatedTooltip } from "./content/animated-tooltip"
import Form from "../app/Forms/form"



export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-#0b0a09">
      <main className="flex-1">
        <Welcome /> 
        
        <div className="flex justify-center items-center">
          <div>
            <h1 className="text-center lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]" style={{ paddingTop: '40px' }}>
              The Not-So-Secret Weapon of <mark className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">#HUSTLERS </mark>
            </h1>
            <br />
            <br />
            <BentoGridThirdDemo />
          </div>
        </div>
        <h1 className="text-center pl-15 lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]" style={{ paddingTop: '40px' }}>
          Recent <mark className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">Updates</mark>
        </h1>
        <br />
        <br />
        <div style={{ position: 'relative', backgroundImage: 'url("https://png.pngtree.com/background/20210711/original/pngtree-white-smoke-in-black-background-picture-image_1167622.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius:'20px' }}>
  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backdropFilter: 'blur(5px)', borderRadius:'20px' }}></div>

  <div className="flex justify-center">
    <ul className="flex flex-wrap justify-center list-none">
      {[...Array(3)].map((_, index) => (
        <li key={index} className="m-2">
          <FollowingPointerDemo />
        </li>
      ))}
    </ul>
  </div>
  <br />
  <br />
  <div className="flex justify-center">
    <ul className="flex flex-wrap justify-center list-none">
      {[...Array(3)].map((_, index) => (
        <li key={index} className="m-2">
          <FollowingPointerDemo />
        </li>
      ))}
    </ul>
  </div>
</div>

        <div className="flex justify-center items-center h-20">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Explore More
          </button>
        </div>

      

        <Scheduleoff />
        {/* <Scheduleon /> */}
        
        
        <h1 className="text-center lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
          Tools <mark className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">Section</mark>
        </h1>
        <CardHoverEffectDemo />
        <h1 className="text-center lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
          Our <mark className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">Snapshots</mark>
        </h1>
       <ParallaxScrollSecondDemo></ParallaxScrollSecondDemo>
      </main>
    </div>
  )
}

function MountainIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
