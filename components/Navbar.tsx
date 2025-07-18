"use client";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
    // State to determine whether the navbar should be visible or hidden
    const [showNavbar, setShowNavbar] = useState(true);

    // useRef to store the last scroll position -- avoid triggering re-renders
    const lastScrollY = useRef(0);

    useEffect(() => {
        // Function runs every time the user scrolls
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // If user scrolls down and passes the threshold (50px), hide the navbar
            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setShowNavbar(false);
            } else {
                // If user scrolled up, show the navbar
                setShowNavbar(true);
            }

            // Update the last scroll position for the next scroll event
            lastScrollY.current = currentScrollY;
        };

        // Attach the scroll event listener when component mounts
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`
                w-full flex justify-center py-4 dark:bg-neutral-900 
                transition-transform duration-300 fixed top-0 z-50
                ${showNavbar ? "translate-y-0" : "-translate-y-full"}
            `}
        >
            {/* Container with blurred background and pill-shaped border */}
            <div className="flex gap-6 px-2 py-1 border-2 border-neutral-300 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md">
                <a href="#projects" className="px-4 py-2 text-sm hover:text-gray-400 transition">Projects</a>
                <a href="#about" className="px-4 py-2 text-sm hover:text-gray-400 transition">About</a>
                <a href="#contact" className="px-4 py-2 text-sm hover:text-gray-400 transition">Contact</a>
            </div>
        </nav>
    );
}
