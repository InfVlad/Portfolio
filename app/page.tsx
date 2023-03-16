import { Navbar, Footer } from "@/components";
import { Hero, About, Skills } from "@/sections";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import("@/sections/Contact"));
const Projects = dynamic(() => import("@/sections/Projects"));

export default function Home() {
    return (
        <div className="bg-dark-blue">
            <Navbar />
            <main className="overflow-hidden text-white">
                <Hero />
                <Projects />
                <About />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
