"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  return (
    <section className="dark:bg-neutral-900 pt-40" ref={ref}>
      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl text-center mb-16 pt-16 text-black dark:text-white"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        Let's Connect
      </motion.h1>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 md:gap-x-8 md:pt-10 pb-20 px-6 md:px-20"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {[
          { label: "Email Me", href: "mailto:raulmtzjr7@gmail.com" },
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/raulmtzjr/",
          },
          {
            label: "GitHub",
            href: "https://github.com/Rawwu",
          },
          {
            label: "Blog",
            href: "https://elcyber.net/",
          },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="text-center min-w-[140px] px-6 py-2 border rounded-md text-white hover:bg-neutral-700 transition"
          >
            {label}
          </a>
        ))}
      </motion.div>
    </section>
  );
}
