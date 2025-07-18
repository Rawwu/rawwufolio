"use client"
import Image from "next/image"
import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"

type Project = {
    title: string;
    description: string;
    type: string;
    tech: string;
    imageSrc: string;
    github: string;
    demo?: string;
}
/* Projects Array */
const projects: Project[] = [
    {
      title: "SIFT",
      description:
        "A flight booking platform that helps users find the best airfare while simplifying the booking process. It features real-time flight search and integrates a predictive model trained on historical pricing data to recommend the best times to book.",
      type: "Fullstack Web Application",
      tech: "ReactJS • NodeJS • Python • AWS: Amplify, Cognito, Lambda, API Gateway, DynamoDB • Heroku • FastAPI • Stripe API • Amadeus API",
      imageSrc: "/sift-logo.jpg",
      github: "https://github.com/Rawwu/Sift",
    },
    {
      title: "Off-Campus Housing",
      description:
        "A listing platform built for UNT students to find, post, and manage off-campus housing options. Includes authentication, dynamic filtering, and a responsive layout.",
      type: "Fullstack Web Application",
      tech: "JavaScript • CSS • NodeJS • ExpressJS • AWS: CodePipeline, Elastic Beanstalk • MongoDB • Google Maps API",
      imageSrc: "/OCH-laptop.png",
      github: "https://github.com/Rawwu/UNT-Off-Campus-Housing",
    },
    {
      title: "Invoicer",
      description:
        "A job estimation and invoicing tool tailored for landscaping businesses. Allows admins to calculate labor, materials, and travel costs to generate itemized PDF invoices for clients.",
      type: "Fullstack Web Application",
      tech: "Streamlit • FastAPI • Python • SQLite3 • Pandas • Matplotlib • REST APIs",
      imageSrc: "/Invoicer-tablet.png",
      github: "https://github.com/Rawwu/Invoicer",
    },
    {
      title: "RL&Gc Landing Page",
      description:
        "A modern, responsive marketing site for Raul’s Lawn & Garden. Highlights services, testimonials, and a contact form to drive customer inquiries and improve brand visibility.",
      type: "Static Marketing Website",
      tech: "NextJS • Tailwind CSS • Vercel",
      imageSrc: "/RLnG-desktop.png",
      github: "https://github.com/Rawwu/RL-GC",
      demo: "https://rl-gc.vercel.app/",
    },
  ];  

function ProjectCard({ project }: { project: Project }) {
    const ref = useRef(null)
    // Trigger when close to viewport
    const isInView = useInView(ref, { once: true, margin: "-130px" })
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="grid gap-6 py-6 px-4 sm:px-6 md:px-10 lg:px-20 max-w-7xl mx-auto md:grid-cols-2">
                <Image
                    src={project.imageSrc}
                    alt={`${project.title} logo`}
                    width={300}
                    height={100}
                    className="rounded shadow w-full max-w-[300px] h-auto mx-auto"
                />
                <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
                    <p className="text-sm text-gray-400">{project.type}</p>
                    <h2 className="text-xl font-bold text-white">{project.title}</h2>
                    <p className="text-base text-gray-300">{project.description}</p>
                    <p className="text-sm text-gray-400">{project.tech}</p>
                    {/* GitHub Link */}
                    <div className="text-sm mt-2">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            GitHub
                        </a>
                        {/* Demo Link - Optional */}
                        {project.demo && (
                            <>
                                {" "}|{" "}
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-blue-400 hover:underline"
                                >
                                    Demo
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
  

export default function Projects() {
    return (
        <section className="dark:bg-neutral-900">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center mb-16 pt-16 text-black dark:text-white">
                Featured Projects
            </h1>
            {/* Project card map */}
            {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
            ))}
        </section>
    )
}