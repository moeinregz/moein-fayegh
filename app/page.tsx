import EditorBar from "@/components/EditorBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TopButton from "@/components/TopButton";

export default function Home() {
  return (
    <>
      <EditorBar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <TopButton />
    </>
  );
}
