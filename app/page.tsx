import { Navbar, Footer } from "@/components"
import { Hero, About, Skills, Contact, Projects } from "../sections"

export default function Home() {
    return (
        <main>
            <div className="bg-gray-900">
                <Navbar />
                <main className="text-white">
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
        </main>
    )
}
