"use client";
import {
  useScroll,
  useTransform,
  motion,
  useInView,
} from "framer-motion";
import React, { useEffect, useRef, useState, useMemo } from "react";

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heightRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  // For scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 40%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  useEffect(() => {
    const el = heightRef.current;
    if (!el) return;

    const resizeObserver = new ResizeObserver(() => {
      setHeight(el.getBoundingClientRect().height);
    });

    resizeObserver.observe(el);
    return () => resizeObserver.disconnect();
  }, []);

  // Create stable refs per entry
  const entryRefs = useMemo(
    () => data.map(() => React.createRef<HTMLDivElement>()),
    [data.length]
  );

  return (
    <div
      className="w-full bg-white dark:bg-neutral-900 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="flex justify-center max-w-7xl mx-auto pt-20 px-4 md:px-8 lg:px-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center mb-16 pt-16 text-black dark:text-white">
          My journey
        </h1>
      </div>

      <div ref={heightRef} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {
          const inView = useInView(entryRefs[index], {
            once: true,
            margin: "0px 0px -100px 0px",
          });

          return (
            <motion.div
              key={index}
              ref={entryRefs[index]}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex justify-start pt-30 md:pt-80 md:gap-1"
            >
              {/* Left side */}
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
              </div>

              {/* Right side */}
              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </motion.div>
          );
        })}

        {/* Timeline bar */}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-neutral-200 dark:via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};