import { Navbar, Footer } from "@/components";
import { Hero, About, Skills, Contact, Projects } from "@/sections";

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
