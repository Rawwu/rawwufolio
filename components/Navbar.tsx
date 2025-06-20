export default function Navbar() {
    return (
        <nav className="w-full flex justify-center py-4 dark:bg-neutral-900 ">
            <div className="flex gap-6 px-2 py-1 border-2 border-neutral-300 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md">
                <a href="#projects" className="px-4 py-2 text-sm hover:text-gray-400 transition">Projects</a>
                <a href="#about" className="px-4 py-2 text-sm hover:text-gray-400 transition">About</a>
                <a href="#contact" className="px-4 py-2 text-sm hover:text-gray-400 transition">Contact</a>
            </div>
        </nav>
    )
}