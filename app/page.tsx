import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import { journey } from "@/lib/timelineData";
import {Timeline} from '@/components/Timeline';
import Contact from '@/components/Contact';


export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <div className="relative w-full overflow-clip">
        <Timeline data={journey} />
      </div>
      <Contact />
    </main>
  );
}
