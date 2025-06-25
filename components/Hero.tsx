"use client";
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="dark:bg-neutral-900">
            {/* Main Hero Section */}
            <div className="flex flex-col md:flex-row items-center justify-between px-6 pt-20 pb-20 max-w-7xl mx-auto">
                <div className="md:w-2/3 text-center md:text-left space-y-4">
                    {/* Left Column */}
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        My name is Raúl.<br />
                        I’m a recent CS grad<br />
                        passionate about<br />
                        creating impactful<br />
                        digital experiences.
                    </h1>
                </div>
                <div className="md:w-1/3 flex flex-col items-center justify-center">
                    {/* Right Column */}
                    <div className='mt-20 md:mt-66'>
                        <button className="hover:cursor-pointer px-4 py-2 justify-center border-1 rounded-md bg-transparent text-white hover:bg-neutral-700 transition">
                            Resume
                        </button>
                    </div>
                </div>
            </div>
            {/* 3 Points */}
            <div className="max-w-7xl mx-auto px-6 mt-10 pb-20 dark:bg-neutral-900">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 text-left">
                    <div className="max-w-xs">
                        <p className="text-white text-sm md:text-base"> 
                            {'{ 1 } '}<br /> Experienced in full-stack web development and project planning
                        </p>
                    </div>
                    <div className="max-w-xs">
                        <p className="text-white text-sm md:text-base"> 
                            {'{ 2 } '}<br /> I specialize in backend development
                        </p>
                    </div>
                    <div className="max-w-xs">
                        <p className="text-white text-sm md:text-base"> 
                            {'{ 3 } '}<br /> Knowledgeable in cloud computing and architecture
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
