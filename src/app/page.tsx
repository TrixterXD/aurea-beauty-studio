import Hero from "../components/Hero";
import Philosophy from "../components/Philosophy";
import Treatments from "../components/Treatments";
import Booking from "../components/Booking";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Philosophy />
        <Treatments />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
