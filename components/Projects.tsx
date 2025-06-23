"use client"
import Image from "next/image"
import React, {useState} from 'react'

type Project = {
    title: string;
    description: string;
    type: string;
    tech: string;
    imageSrc: string;
}
/* Projects Array */
const projects: Project[] = [
    {
        title: "SIFT",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
        type: "Fullstack Web Application",
        tech: "ReactJS • NodeJS • Bootstrap • AWS: Cognito, Lambda, API Gateway • DynamoDB",
        imageSrc: "/sift-logo.jpg",
    },
    {
        title: "Off-Campus Housing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
        type: "Fullstack Web Application",
        tech: "ReactJS • NodeJS • Bootstrap • AWS: Cognito, Lambda, API Gateway • DynamoDB",
        imageSrc: "/sift-logo.jpg",
    },
    {
        title: "El Cyber",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
        type: "Fullstack Web Application",
        tech: "ReactJS • NodeJS • Bootstrap • AWS: Cognito, Lambda, API Gateway • DynamoDB",
        imageSrc: "/sift-logo.jpg",
    },
    {
        title: "RL&Gc Landing Page",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
        type: "Fullstack Web Application",
        tech: "ReactJS • NodeJS • Bootstrap • AWS: Cognito, Lambda, API Gateway • DynamoDB",
        imageSrc: "/sift-logo.jpg",
    },
];

function ProjectCard({ project }: { project: Project }) {
    return (
      <div className="grid md:grid-cols-2 py-6 px-60 max-w-7xl mx-auto">
        <Image
          src={project.imageSrc}
          alt={`${project.title} logo`}
          width={300}
          height={100}
          className="rounded shadow"
        />
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-400">{project.type}</p>
          <h2 className="text-xl font-bold text-white">{project.title}</h2>
          <p className="text-base text-gray-300">{project.description}</p>
          <p className="text-sm text-gray-400">{project.tech}</p>
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
            <h1 className="flex justify-center items-center text-lg md:text-4xl mb-16 pt-16 text-black dark:text-white " >
                Featured Projects
            </h1>
            {/* Project card */}
            {visibleProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
            <div className="flex justify-center mt-10 md:mt-10 pb-20">
                <button className="hover:cursor-pointer px-4 py-2 justify-center border-1 rounded-md bg-transparent text-white hover:bg-gray-500 transition"
                    onClick={() => setShowAll(!showAll)}
                    >
                    {showAll ? "See Less" : "See More"}
                </button>
            </div>
        </section>
    )
}