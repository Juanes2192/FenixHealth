// LANDING WITH NAVBAR, LAZY LOAD & ANIMATIONS
import { lazy, Suspense } from "react";
import NavbarLanding from "./NavbarLanding";
import Loader from "../../../components/Loader";

const Hero = lazy(() => import("./Hero"));
const Features = lazy(() => import("./Features"));
const Benefits = lazy(() => import("./Benefits"));
const CTA = lazy(() => import("./CTA"));

export default function Landing() {
  return (
    <>
      <NavbarLanding />
      <Suspense fallback={<Loader />}>
        <Hero />
        <Features />
        <Benefits />
        <CTA />
      </Suspense>
    </>
  );
}
