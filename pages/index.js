import Hero from "../components/Hero";
// import Image from 'next/image'
// import styles from "../styles/Home.module.css";
import About from "../components/About";
import ServicesSections from "../components/ServicesSections";
import CTA from "../components/CTA";
import Testimony from "../components/Testimony";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";


export default function Home() {
  return (
    <main className="">
      <Hero />
      {/* <About /> */}
      <ServicesSections/>
      <CTA/>
      <Gallery/>
      <Testimony/>
      <Contact/>

    </main>
  );
}
