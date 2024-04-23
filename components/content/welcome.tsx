"use client";
import React, { useState } from 'react';
import { Skeleton } from '../ui/skeleton';
import { Image } from "@nextui-org/react";
import { AnimatedTooltipPreview } from '@/app/(main)/(routes)/events/page';

export default function Welcome() {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    }

    return (
        <section className="w-full pt-5 md:pt-10 lg:pt-10 border-b pb-8">
            <div className="px-2 md:px-6 space-y-10 xl:space-y-16">
                <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-5 md:grid-cols-2 md:gap-16 justify-center items-center">
                    <div>
                        <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                           SaaS Startup Squad? <mark className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">We Got You!</mark>
                        </h1> 
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 pt-2">
                           We're all startup founders, ditch the fancy suits and get down to the real hustle! We've built startups from scratch, made mistakes (learned a ton!), and launched like champs. Now, we want to share our stories (good and bad) to help you win!
                        </p>
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 pt-2">
                            <button 
                                className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm"
                                onClick={() => { window.location.href = "/Forms"; }}
                            >
                                Join now
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col items-start space-y-4">
                        {!imageLoaded && <Skeleton className="w-64 h-32 rounded-md mx-auto aspect-[2/1]" />}
                        <Image
                            // width={700}
                            disableSkeleton={false}
                            className={`rounded-lg drop-shadow-xl mx-auto w-full  overflow-hidden rounded-t-xl object-cover ${!imageLoaded ? 'hidden' : ''}`}
                            src={"https://pedalstart.com/startup/images/2023-08-3.jpg"}
                            alt=""
                            onLoad={handleImageLoad}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
