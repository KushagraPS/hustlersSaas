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
import { AnimatedPinDemo, AnimatedTooltipPreview, BentoGridThirdDemo, CardHoverEffectDemo, ParallaxScrollSecondDemo, TypewriterEffectSmoothDemo } from "@/app/(main)/(routes)/events/page"
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
{/*         <h1 className="text-center pl-15 lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]" style={{ paddingTop: '40px' }}>
          News for <mark className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">Hustlers</mark>
        </h1>
        <br />
        <br /> */}
       

      
      

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
