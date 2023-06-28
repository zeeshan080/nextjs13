import AboutIntro from "./components/about-intro";
import HeroHeader from "./components/hero-header";
import Testimonials from "./components/testimonials";

export default function Home() {
    return (
      <main>
        <HeroHeader/>
        <AboutIntro/>
        <Testimonials/>
      </main>
    )
  }
  