import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import { journey } from "@/lib/timelineData";
import {Timeline} from '@/components/Timeline';
import Contact from '@/components/Contact';



export default function Home() {
    return (
        <main>
            <section id="hero">
                <Hero />
            </section>

            <section id="projects" >
                <Projects />
            </section>

            <section id="about" className="relative w-full overflow-clip">
                <Timeline data={journey} />
            </section>

            <section id="contact">
                <Contact />
            </section>
        </main>
    );
}
