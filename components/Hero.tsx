"use client";
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        /* Animation for hero text */
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.6 }}
            className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-100 dark:bg-gray-900"
        >
            {/* Text content for Hero */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4">My name is Raúl.<br />
                I’m a recent CS grad<br />
                passionate about<br />
                creating impactful<br />
                digital experiences.
            </h1>
        </motion.section>
    )
}