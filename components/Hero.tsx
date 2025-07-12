"use client";
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <section className="dark:bg-neutral-900">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 pt-20 pb-20 max-w-7xl mx-auto">
        {/* Left Column - Animated Text */}
        <div className="md:w-2/3 text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">
            Hello, I'm Raúl.
            <br />
            <span className="text-blue-400 block whitespace-pre-line">
              {/* Typewriting animation */}
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("I'm a recent CS grad\n")
                    .pauseFor(50)
                    .typeString("passionate about\n")
                    .pauseFor(50)
                    .typeString("creating impactful  \n")
                    .pauseFor(50)
                    .typeString("digital experiences")
                    .start();
                }}
                options={{
                  delay: 50,
                  cursor: "|",
                }}
              />
            </span>
          </h1>
        </div>

        {/* Right column - Resume Button */}
        <div className="md:w-1/3 flex flex-col items-center justify-center">
          <div className="mt-20 md:mt-66">
            <a
              href="/Resume-Raul-Mtz.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-white rounded-md bg-transparent text-white hover:bg-neutral-700 transition text-center"
            >
              Resume
            </a>
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