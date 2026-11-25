import type { Dictionary } from "../i18n/en";
import Hero from "./Hero";
import Philosophy from "./Philosophy";
import Experience from "./Experience";
import Treatments from "./Treatments";
import Booking from "./Booking";
import Footer from "./Footer";

export default function Landing({ copy }: { copy: Dictionary }) {
  return (
    <>
      <main>
        <Hero copy={copy.hero} />
        <Philosophy copy={copy.philosophy} />
        <Experience copy={copy.experience} />
        <Treatments copy={copy.treatments} />
        <Booking copy={copy.booking} />
      </main>
      <Footer copy={copy.footer} nav={copy.nav} />
    </>
  );
}
