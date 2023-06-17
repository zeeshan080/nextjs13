import { Suspense, lazy } from "react";
import Loading from "./loading";
import Soon from "./components/soon";

const HeroHeader = lazy(() => import("./components/hero"));
const About = lazy(() => import("./components/about"));
const Experience = lazy(() => import("./components/experience"));

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <HeroHeader />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Soon />
      </Suspense>
    </main>
  );
}
