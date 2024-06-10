import { Button } from "@/components/ui/button";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Benefits from "./_components/Benefits";
import Footer from "./_components/Footer";



export default function Home() {
  return (
    <div className=" lg:mx-52">
      <Header />
      <Hero />
      <Benefits />
      <Footer />
    </div>
  );
}
