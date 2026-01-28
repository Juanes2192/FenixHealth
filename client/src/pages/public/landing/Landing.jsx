// Landing.jsx
import { lazy, Suspense } from "react";
import NavbarLanding from "./NavbarLanding";
import Loader from "../../../components/Loader";

// Lazy load por secciones (code splitting real)
const Hero = lazy(() => import("./Hero"));
const Features = lazy(() => import("./Features"));
const Benefits = lazy(() => import("./Benefits"));
const CTA = lazy(() => import("./CTA"));

export default function Landing() {
  return (
    <>
      {/* Navbar siempre visible, sin bloqueo */}
      <NavbarLanding />

      {/* HERO: prioridad máxima (conversión + SEO) */}
      <Suspense fallback={<Loader />}>
        <Hero />
      </Suspense>

      {/* Secciones secundarias: no bloquean render inicial */}
      <Suspense fallback={null}>
        <Features />
      </Suspense>

      <Suspense fallback={null}>
        <Benefits />
      </Suspense>

      <Suspense fallback={null}>
        <CTA />
      </Suspense>
    </>
  );
}
