import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PortfolioShowcase from "./components/PortfolioShowcase";
import Contact from "./components/Contact";
import Background from "./components/Background";

export default function App() {
  return (
    <div className="relative text-white min-h-screen">
      <Background />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <PortfolioShowcase />
        <Contact />
      </div>
    </div>
  );
}