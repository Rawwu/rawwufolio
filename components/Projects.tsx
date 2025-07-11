"use client"
import Image from "next/image"
import React, {useState} from 'react'

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
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
        type: "Fullstack Web Application",
        tech: "ReactJS • NodeJS • Bootstrap • AWS: Cognito, Lambda, API Gateway • DynamoDB",
        imageSrc: "/sift-logo.jpg",
        github: "https://github.com/Rawwu/Sift",
    },
    {
        title: "Off-Campus Housing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
        type: "Fullstack Web Application",
        tech: "ReactJS • NodeJS • Bootstrap • AWS: Cognito, Lambda, API Gateway • DynamoDB",
        imageSrc: "/sift-logo.jpg",
        github: "https://github.com/Rawwu/UNT-Off-Campus-Housing",
    },
    {
        title: "Invoicer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
        type: "Fullstack Web Application",
        tech: "ReactJS • NodeJS • Bootstrap • AWS: Cognito, Lambda, API Gateway • DynamoDB",
        imageSrc: "/sift-logo.jpg",
        github: "https://github.com/Rawwu/Invoicer",
    },
    {
        title: "RL&Gc Landing Page",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
        type: "Fullstack Web Application",
        tech: "ReactJS • NodeJS • Bootstrap • AWS: Cognito, Lambda, API Gateway • DynamoDB",
        imageSrc: "/sift-logo.jpg",
        github: "https://github.com/Rawwu/RL-GC",
    },
];

function ProjectCard({ project }: { project: Project }) {
    return (
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
    );
}
  

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? projects : projects.slice(0, 2);
    
    return (
        <section className="dark:bg-neutral-900">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-center mb-16 pt-16 text-black dark:text-white">
                Featured Projects
            </h1>
            {/* Project card */}
            {visibleProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
            {/* Button */}
            <div className="flex justify-center mt-10 md:mt-10 pb-20">
                <button className="hover:cursor-pointer px-4 py-2 justify-center border-1 rounded-md bg-transparent text-white hover:bg-neutral-700 transition"
                    onClick={() => setShowAll(!showAll)}
                    >
                    {showAll ? "See Less" : "See More"}
                </button>
            </div>
        </section>
    )
}