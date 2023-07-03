import { Suspense } from "react";
import AboutIntro from "./components/about-intro";
import HeroHeader from "./components/hero-header";
import Testimonials from "./components/testimonials";
import Loading from "./loading";

export default function Home() {
    return (
      <Suspense fallback={<Loading/>}>

      <main>
        <HeroHeader/>
        <AboutIntro/>
        <Testimonials/>
      </main>
      </Suspense>
    )
  }
  