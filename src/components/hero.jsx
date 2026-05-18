import heroImg from "../assets/hero.jpeg";
import Galaxy from "./Galaxy";
import LiquidEther from "./LiquidEther";

export default function Hero() {
  const fadeUp = (delay) => ({
    opacity: 0,
    animation: `fadeUp 0.7s ease ${delay}s both`,
  });

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-6 py-20 text-center"
      style={{ background: "#06090f" }}
    >

            <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B497CF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={12}
          iterationsPoisson={12}
          resolution={0.3}
          isBounce={false}
          autoDemo={false}
          autoSpeed={0.3}
          autoIntensity={1}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Top fade under navbar */}
      <div
        className="absolute top-0 left-0 w-full h-28 z-40 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(6,9,15,0), rgba(6,9,15,1))",
        }}
      />

      {/* Bottom fade to blend into next section */}
      <div
        className="absolute bottom-0 left-0 w-full h-64 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(6,9,15,0) 0%, rgba(6,9,15,1) 100%)",
        }}
      />

      <div className="relative z-20 w-full">
        <p
          className="text-xs uppercase tracking-[0.2em] mb-5"
          style={{ color: "#4f7cff", ...fadeUp(0.2) }}
        >
          Portfolio
        </p>

        <h1
          className="font-bold leading-tight tracking-tight text-white mb-4"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(52px, 8vw, 88px)",
            ...fadeUp(0.35),
          }}
        >
          Andrew
          <br />
          <span style={{ color: "#a78bfa", fontStyle: "italic" }}>
            Nicholas
          </span>
        </h1>

        <p
          className="text-lg font-light tracking-wider mb-2"
          style={{ color: "#8892a4", ...fadeUp(0.5) }}
        >
          Fullstack Developer
        </p>

        <p
          className="text-sm tracking-widest mb-8"
          style={{ color: "#66708d", ...fadeUp(0.6) }}
        >
          Bachelor of Computer Science{" · "}
          <span style={{ color: "rgba(79,124,255,0.7)" }}>
            Binus University
          </span>
        </p>

        <div
          className="mb-10 flex justify-center"
          style={{ animation: "fadeIn 0.7s ease 0.65s both" }}
        >
          <img
            src={heroImg}
            alt="Andrew Nicholas"
            className="rounded-full border border-white/10 shadow-2xl"
            style={{ width: 180, height: 180, objectFit: "cover" }}
          />
        </div>

        <div
          className="mb-10"
          style={{
            width: 40,
            height: 1,
            background: "linear-gradient(90deg, #4f7cff, #a78bfa)",
            opacity: 0,
            animation: "fadeIn 0.7s ease 0.65s both",
            margin: "0 auto",
          }}
        />

        <div className="flex justify-center">
          <a
            href="/cv.pdf"
            download
            className="relative overflow-hidden inline-block px-10 py-4 text-xs uppercase tracking-[0.15em] transition-colors duration-300"
            style={{
              border: "1px solid #4f7cff",
              color: "#4f7cff",
              ...fadeUp(0.75),
              boxSizing: "border-box",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#06090f";
              const bg = e.currentTarget.querySelector(".hero-btn-bg");
              if (bg) bg.style.transform = "translateX(0)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#4f7cff";
              const bg = e.currentTarget.querySelector(".hero-btn-bg");
              if (bg) bg.style.transform = "translateX(-100%)";
            }}
          >
            <span className="relative z-30 flex items-center gap-2">
              Download CV
            </span>
            <span
              className="hero-btn-bg absolute inset-0 transition-transform duration-300 pointer-events-none"
              style={{
                background: "#4f7cff",
                zIndex: 0,
                transform: "translateX(-100%)",
              }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
