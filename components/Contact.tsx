export default function Contact() {
    return (
        <section className="dark:bg-neutral-900 pt-40">
            {/* Heading */}
            <h1 className="flex justify-center items-center text-lg md:text-4xl mb-16 pt-16 text-black dark:text-white">Let's Connect</h1>
            {/* Buttons */}
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-x-8 md:pt-10 pb-20 px-20 md:px-60">
                {/* Email */}
                <a 
                    className="text-center w-full md:w-1/4 px-8 py-2 border rounded-md text-white hover:bg-neutral-700 transition hover:cursor-pointer"
                >
                    Email Me
                </a>
                {/* LinkedIn */}
                <a 
                    className="text-center w-full md:w-1/4 px-8 py-2 border rounded-md text-white hover:bg-neutral-700 transition hover:cursor-pointer"
                >
                    LinkedIn
                </a>
                {/* GitHub */}
                <a 
                    className="text-center w-full md:w-1/4 px-8 py-2 border rounded-md text-white hover:bg-neutral-700 transition hover:cursor-pointer"
                >
                    GitHub
                </a>
                {/* Blog */}
                <a 
                    className="text-center w-full md:w-1/4 px-8 py-2 border rounded-md text-white hover:bg-neutral-700 transition hover:cursor-pointer"
                >
                    Blog
                </a>
            </div>
        </section>
    )
}