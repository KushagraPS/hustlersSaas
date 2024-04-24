"use client"

import Link from "next/link";
import { Button } from "../ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "../ui/separator"; // Import the missing module from the correct file path
import React from "react";
import { FaBook } from "react-icons/fa";
export default function Schedule() {


    const preWorkshopData = [
        {
            day: 'Founders Meetup - Bangalore Edition',
            time: '6:30 - 8:30pm IST',
            name: 'Founders Meetup - Bangalore Edition',
            date: 'Sunday, 27th April',
            duration: '2 hours',
            events: [
                {
                    name: 'Founders War Room',
                    description: ''
                },
               
            ],
            link: 'CC_Workshop_CE[1].pdf',
        },
        {
            day: 'Coming Soon',
            time: '-',
            name: '- ',
            date: '-',
            duration: '-',
            expert: [
                {
                    name: '-',
                    description: '-'
                },
                {
                    name: '-',
                    description: '-'
                },
            ],
            link: 'CS_Workshop_CE[1].pdf',
        },
        {
            day: 'Coming Soon',
            time: '-',
            name: '- ',
            date: '-',
            duration: '',
            expert: [
                {
                    name: '-',
                    description: '-'
                },
                {
                    name: '-',
                    description: '-'
                },
            ],
            link: 'Python_Workshop_CE[1].pdf',
        },
    ];

   
    // { day: 'Day 1 - Workshops', time: '10:00 AM - 5:00 PM' },

    return (
        <section id="schedule" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                       
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your Week at a Glance</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Do not miss a beat! Explore the week-long event schedule to craft your ideal experience.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 justify-center">
                    {preWorkshopData.map((event, index) => (
                        <div className="mt-4" key={index}>
                            <Drawer>
                                <DrawerTrigger asChild>
                                    <div 
                                    className="grid gap-1 border border-orange-400 rounded-xl px-4 py-4" 
                                    style={{ cursor: 'pointer' }}>
                                        <h3 className="text-lg font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">{event.day}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{event.time}</p>
                                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Offline</div>
                                    </div>
                                    
                                </DrawerTrigger>
                                <DrawerContent>
                                    <div className="mx-auto w-full max-w-xl">
                                        <DrawerHeader className="text-left">
                                            <DrawerTitle className="uppercase fon">{event.name}</DrawerTitle>
                                            <Separator className="my-2" />
                                            <DrawerDescription>Date: {event.date}</DrawerDescription>
                                            <DrawerDescription>Duration: {event.duration}</DrawerDescription>
                                            <Separator className="my-2" />
                                            {Array.isArray(event.events) && event.events.map((events, index) => (
                                                <React.Fragment key={index}>
                                                    <DrawerTitle className="text-left mt-2 bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">Event: {events.name}</DrawerTitle>
                                                    <DrawerDescription className="text-left text-xs">{events.description}</DrawerDescription>
                                                </React.Fragment>
                                            ))}
                                            <Separator className="my-2" />
                                            <Link href={event.link} target="_blank">
                            <div className="pt-3 flex items-center">
                            
                            
                            </div>
                          </Link>
                                        </DrawerHeader>

                                        <DrawerFooter>
                                            <Link
                                                href={"https://forms.gle/DCi3RZKQgGLqAPdi6"}
                                                target="_blank"
                                                className="mx-auto">
                                                <Button variant="primary" size={"sm"}>Register</Button>
                                            </Link>
                                            <DrawerClose asChild>
                                                <Button variant="outline">Cancel</Button>
                                            </DrawerClose>
                                        </DrawerFooter>
                                    </div>
                                </DrawerContent>
                            </Drawer>
                        </div>
                    ))}
                  
                </div>
                {/* <div className="flex justify-center mx-auto">
                    <Link href="events">
                        <Button variant="orange" >See All Events</Button>
                    </Link>
                    <Link className="ml-3" href="https://drive.google.com/file/d/1YZg1Fy91tKcOIUUkH95j3DAe5m_FITUg/view?usp=sharing"
                        target="_blank">
                        <Button variant="orange" >Tentative Schedule</Button>
                    </Link>
                </div> */}
            </div>
        </section>
    );
};
