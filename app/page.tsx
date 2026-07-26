import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Highlights from "./components/Highlights";
import About from "./components/About";
import Philosophy from "./components/Philosophy";
import Credentials from "./components/Credentials";
import PracticeAreas from "./components/PracticeAreas";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Nav />
      <Highlights />
      <About />
      <Philosophy />
      <Credentials />
      <PracticeAreas />
      <Contact />
      <Footer />
    </>
  );
}
