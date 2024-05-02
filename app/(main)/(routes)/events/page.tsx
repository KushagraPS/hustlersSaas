"use client";
import React, { useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";


import { Button } from "@/components/ui/button";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Separator } from "@/components/ui/separator";

import { eventData } from './data';
import Link from "next/link";
import { FaBook } from "react-icons/fa";

const Events = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  }

  

  return (
    <>
      <div className="flex flex-col justify-center px-4 mt-6">
        <h1 className="mb-4 px-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white mx-auto"><mark className="px-2 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">Events</mark> at <mark className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">Hustlers</mark></h1>
        <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 px-4 mx-auto align-middle">
          Variety of events catering to different interests and industries. From technical workshops to networking events, there is something for everyone. Dare to dream, dare to innovate, prizes await!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center mx-auto my-4 py-8 px-8">
        {eventData.map((event) => (
          <Card key={event.id} className="py-4 mx-auto border border-cyan-400 rounded-xl w-full">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-extrabold uppercase text-xl bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">{event.title}</h4>
              <small className="text-default-500">{event.category} - {event.team}</small>
              <p className="text-tiny font-bold">{event.date}</p>
            </CardHeader>
            <CardBody className="py-2">
              
              <Image
                width={350}
                disableSkeleton={false}
                className={`rounded-lg drop-shadow-xl mx-auto object-cover aspect-[2/1] ${imageLoaded ? '' : 'hidden'}`}
                src={event.imageSrc}
                alt=""
                onLoad={handleImageLoad}
              />
              <small className="text-default-500 line-clamp-1 mt-3">{event.description}</small>
              <div className="mt-4">
                <Drawer>
                  <DrawerTrigger asChild>
                    <Button variant="orange">Details</Button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto w-full max-w-lg">
                      <DrawerHeader>
                        <DrawerTitle className="font-extrabold text-xl bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">{event.title}</DrawerTitle>
                        <Separator></Separator>
                        <DrawerDescription>{event.description}</DrawerDescription>
                        <div className="text-left">
                          <DrawerDescription>Rounds: {event.rounds}</DrawerDescription>
                          <DrawerDescription>Team/Individual: {event.team}</DrawerDescription>
                          <DrawerDescription>Price: ₹{event.price}/-</DrawerDescription>

                          {/* <Link href={event.link} target="_blank">
                            <div className="pt-3 flex items-center">
                              <FaBook className="text-amber-500 " />
                              <DrawerDescription className="px-2 font-bold uppercase bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">Rules & Regulations</DrawerDescription>
                            </div>
                          </Link> */}
                        </div>
                        <Separator className="my-2"></Separator>

                        <DrawerTitle className="text-base">Faculty Co-Ordinators</DrawerTitle>
                        {event.facultyCoordinators && event.facultyCoordinators.map((coordinator) => (
                          <DrawerDescription key={coordinator.name}>
                            {coordinator.name}: <Link href={"mailto:" + coordinator.email}>{coordinator.email}</Link>
                          </DrawerDescription>
                        ))}

                        <DrawerTitle className="text-base">Student Co-Ordinators</DrawerTitle>
                        {event.coordinators && event.coordinators.map((coordinator) => (
                          <DrawerDescription key={coordinator.name}>
                            {coordinator.name}: <Link href={"tel:+91 " + coordinator.contact}>+91 {coordinator.contact}</Link>
                          </DrawerDescription>
                        ))}
                      </DrawerHeader>

                      <DrawerFooter>
                        {/* <Button>Submit</Button> */}
                        <Link href={event.link} target="_blank">
                        <Button  variant="primary" size={"sm"}>Get More Details</Button>
                        </Link>
                        <DrawerClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Events;

import { HoverEffect } from "@/components/content/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "AWS (Amazon Web Services)",
    description:
      "Confused by Cloud options? Don't worry, we've got you covered. Our AWS Evaluation Calculator simplifies choosing the right Amazon Web Services plan for your startup. No tech jargon, just easy cloud solutions!",
    link: "https://aws.amazon.com/free/?gclid=Cj0KCQjwlZixBhCoARIsAIC745DcJXm20SnMcnkEW-QbaaHd3NNAcFbintfsckxjmI9aJIaC99YDWrQaAlH6EALw_wcB&trk=14a4002d-4936-4343-8211-b5a150ca592b&sc_channel=ps&ef_id=Cj0KCQjwlZixBhCoARIsAIC745DcJXm20SnMcnkEW-QbaaHd3NNAcFbintfsckxjmI9aJIaC99YDWrQaAlH6EALw_wcB:G:s&s_kwcid=AL!4422!3!453325184782!e!!g!!aws!10712784856!111477279771&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all",
  },
  {
    title: "Market Research",
    description:
      "Skip the hours digging through data! Our Market Research tool helps you identify the hottest trends in your market, fast.",
    link: "https://mailchimp.com/solutions/email-marketing-platform/?ds_c=DEPT_AOC_Google_Search_ROW_EN_NB_Acquire_Broad_50off_T5&ds_kids=p78365428698&ds_a_lid=kwd-10068951&ds_cid=71700000115522849&ds_agid=58700008587105020&gad_source=1&gclid=Cj0KCQjwlZixBhCoARIsAIC745DNbMnljUS6d3Fgx8SSro0j8Cm1NCutXNJA9_05Wg-Roc7YSZJTcIwaApUvEALw_wcB&gclsrc=aw.ds",
  },
  {
    title: "Pitch Deck Creator",
    description:
      "Design skills not your forte? No sweat! Our Pitch Deck Creator is your secret weapon. Craft a stunning investor pitch deck in minutes with our drag-and-drop tool.",
    link: "https://www.beautiful.ai/aipresentationmaker?utm_source=googleAds&utm_medium=searchGen&utm_campaign=20876785622&ntwrk=g&adgpid=157705829955&plcmnt=&utm_term=ai%20deck%20builder&lp=aipresentationmaker&gad_source=1&gclid=Cj0KCQjwlZixBhCoARIsAIC745DaHMtHLFUNVlg3Zd7_Wgu3T1Mnj8tzOLkkbIsAnBQz_1CBCfiWcacaAja8EALw_wcB",
  },
  {
    title: "Wixsite",
    description:
      "Building a website shouldn't be a headache. Wix makes creating a professional website for your startup a breeze. Just drag, drop, and launch your online empire in record time.",
    link: "https://www.wix.com/",
  },
  {
    title: "Valuation Calculator ",
    description:
      "Need the perfect tool? Ours helps you choose! Enter your project details and our calculator finds the ideal solution for your startup.",
    link: "https://www.omnicalculator.com/finance/pre-and-post-money-valuation",
  },
  {
    title: "Resume Parser",
    description:
      "Hiring a team shouldn't be a chore. Our Resume Parser helps you quickly identify top talent for your open positions. Say goodbye to sifting through endless resumes - find rockstar applicants with superpowers in minutes.",
    link: "https://resumeworded.com/score",
  },
];



import { PinContainer } from "@/components/content/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}

import { TypewriterEffectSmooth } from "@/components/content/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "Startups",
    },
    {
      text: "in",
    },
    {
      text: "growing",
    },
    {
      text: "SaaS.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[20rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to build starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Contact
        </button>
      </div>
    </div>
  );
}



     

import { cn } from "@/lib/utils";

import { BentoGrid, BentoGridItem } from "@/components/content/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";


export function BentoGridThirdDemo() {
  return (
    <BentoGrid className=" mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"
        ></motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Just code in Vanilla Javascript
        </p>
        <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Delusional
        </p>
      </motion.div>
      <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Tailwind CSS is cool, you know
        </p>
        <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Sensible
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          I love angular, RSC, and Redux.
        </p>
        <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Helpless
        </p>
      </motion.div>
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black"
      >
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10"
        />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
      >
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: "Any Stage Welcome",
    description: (
      <span className="text-sm">
        Hustlers is for anyone with the drive to build a killer SaaS product. Passion and hustle are the only entry fees.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Open Books, No Secrets",
    description: (
      <span className="text-sm">
       Share startup wins, fails and laughs. Learn, connect & avoid stumbles. Be real and awesome!

      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Pay it Forward",
    description: (
      <span className="text-sm">
       Founders helping founders! Share problems, find connections, and get good karma (it boomerangs back!). 
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Building Empires on Hustle And Heart",
    description: (
      <span className="text-sm">
      Brainstorm and celebrate wins (big and small) with our supportive founder community.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "From Brainstorm to Breakout",
    description: (
      <span className="text-sm">
       This emphasizes the transformation of brainstorming sessions into successful ventures.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

import { AnimatedTooltip } from "@/components/content/animated-tooltip";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
import Form from '@/app/Forms/form'

export function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <Form />
      </div>
    </section>
  )
}


import { ParallaxScrollSecond } from "@/components/content/parallax-scroll-2";


export function ParallaxScrollSecondDemo() {
  return (
    <div className="parallax-container">
      <ParallaxScrollSecond images={images} />
    </div>
  );
}

const images = [
  
  "https://pedalstart.com/startup/images/2023-08-3-1024x683.jpg",
  "https://onlinemediacafe.com/wp-content/uploads/2023/05/Co-founder-PedalStart-Manas-Pal-1024x576.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXoIpTI2x4OYPSIlz23rZDeFKm1UB-73FEFL_icCk4A&s",
  "https://media.licdn.com/dms/image/D5622AQFVJcj01OHmIw/feedshare-shrink_800/0/1709989200954?e=2147483647&v=beta&t=PFQa6EADfSPuxuQScdDTnO9ch4Tuv9Vtzx2eJaz1G8o",
  "https://media.licdn.com/dms/image/D4D22AQGhwsqAzAmF9w/feedshare-shrink_800/0/1700579589845?e=2147483647&v=beta&t=XH3pRh3kih3IEjKKf6UgbkpUrxv9m0QL-uEC_WEm4og",
  "https://media.licdn.com/dms/image/D4D22AQHmjAnn6d6NbA/feedshare-shrink_800/0/1700579593238?e=2147483647&v=beta&t=3HqTzagxKf9y1d4pDoVOTC2UfuJShOSbvP57WO6Vrlg",
  "https://media.licdn.com/dms/image/D5612AQF3SiCXw_QVvA/article-cover_image-shrink_720_1280/0/1685036735999?e=2147483647&v=beta&t=BAAcjkdHgHKUXA83XbqE7K3zMsgXnJVLBpyvtTTAPHg",
  "https://images.yourstory.com/cs/2/b87effd06a6611e9ad333f8a4777438f/pedalstart-1666193783926.png?fm=png&auto=format&ar=16:9&mode=crop&crop=faces",
  "https://img-cdn.thepublive.com/fit-in/640x430/filters:format(webp)/smstreet/media/media_files/aYK5HZ091zCvWDjXlFBx.jpg",
  "https://images.yourstory.com/cs/2/b87effd06a6611e9ad333f8a4777438f/pedalstart2-1666193689148.png",
  "https://media.licdn.com/dms/image/D4D22AQFTPnxqsNClfA/feedshare-shrink_1280/0/1700755375156?e=1717632000&v=beta&t=S01CkBEdAbOUUDYCM_SGRoIbPUfwKylWvbxPHgrXltY",
  "https://media.licdn.com/dms/image/D4D22AQHk1zsthO9I2w/feedshare-shrink_1280/0/1700755375278?e=1717632000&v=beta&t=fYKPlwp1v1HmRdEI3DG9zPB2zHIE5RsjmwJF6PgpPyQ",
  "https://media.licdn.com/dms/image/D4D22AQG1x6PWwyqgYw/feedshare-shrink_1280/0/1700755376740?e=1717632000&v=beta&t=gj8hUMyj3WJvbClMHZspjqCyQ-kGJnuhlCVMRFjIddw",
  "https://media.licdn.com/dms/image/D4D22AQEbinQpcfYVCQ/feedshare-shrink_800/0/1697710099184?e=1717632000&v=beta&t=yDUUbl9UoGowFyjmRc-2aFmZ1_QauLVGrS5uLQCX8NE",
  "https://s3.ap-south-1.amazonaws.com/townscript-production/gallery-images/3576136/13c1c092-566a-496e-b2bd-0ecf73dd67dd.jpg",
  "https://viestories.com/wp-content/uploads/2024/03/PedalStart-Unveils-PedalCircle-%E2%80%93-A-Pioneering-Innovation-Hub-for-Accelerating-Early-Stage-Start-ups.webp",
  "https://media.licdn.com/dms/image/D4E22AQGZs6k3HKe33g/feedshare-shrink_800/0/1686153953394?e=2147483647&v=beta&t=yy2Nv0IU59O0gDwhSpiIyeQCOapg78i7IMTgjXxyfwI",

 
];

// CSS styles for responsiveness
const styles = `
  .parallax-container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }

  .parallax-scroll-second {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .parallax-scroll-second img {
    width: 100%;
    height: auto;
  }

  @media screen and (min-width: 768px) {
    /* Adjust styles for tablets and larger devices */
    .parallax-scroll-second img {
      width: 50%;
    }
  }

  @media screen and (min-width: 1024px) {
    /* Adjust styles for desktops and larger devices */
    .parallax-scroll-second img {
      width: 33.33%;
    }
  }
`;

// Dynamically inject styles into the document head
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.appendChild(document.createTextNode(styles));
  document.head.appendChild(styleElement);
}
