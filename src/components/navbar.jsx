import { useState, useEffect } from "react";
import GooeyNav from "./GooeyNav";

export default function Navbar() {
  const items = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 flex justify-center px-6 py-5 transition-all duration-300 bg-transparent"
      style={{ animation: "fadeDown 0.6s ease both", backdropFilter: "none" }}
    >
      <div className="flex items-center justify-center w-full max-w-4xl">
        <div className="relative w-full flex justify-center">
          <GooeyNav
            items={items}
            particleCount={5}
            particleDistances={[80, 12]}
            particleR={90}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={150}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
      </div>
    </nav>
  );
}
