import { useState } from "react";

const experiences = [
  {
    id: 1,
    role: "Software Engineer in Test",
    company: "Kawan Lama Group",
    duration: "Feb 2025 - Feb 2026",
    location: "Jakarta, Indonesia",
    description: [
      "Designed and managed detailed test cases, test scenario, and defect report using Jira and Testmo.",
      "Assisted in validating APIs, databases, and application workflows using tools such as PgAdmin and Excel.",
      "Improved understanding of software development lifecycle (SDLC), testing methodologies, and agile collaboration practices in a large-scale enterprise environment.",
      "Formulated and maintained automation testing scripts using Playwright to improve testing efficiency.",
    ],
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Freelance",
    duration: "Feb 2025 – Feb 2026",
    location: "Remote",
    description: [
      "Developed and maintained backend services for a facility reporting and management system using Express.js and Firebase. ",
      "Created and implemented RESTful APIs for report management, user authentication, dashboard analytics, and multi-tenant subdomain support. ",
      "Integrated backend services with frontend applications built using React and Progressive Web Application (PWA) architecture. ",
    ],
  },
  {
    id: 3,
    role: "Student Mentor",
    company: "Binus University",
    duration: "Sept 2024 – Feb 2025",
    location: "Jakarta, Indonesia",
    description: [
      "Taught Computer Science students with college class including Object Oriented Programming(OOP), Java, Database, SQL, Operating System, C, C++, Laravel, PHP, Algorithm and Design Analysis, MySQL. ",
      // "Another bullet point highlighting a major contribution, a metric, or a technical challenge you solved.",
      // "A third point about collaboration, tools, or methodologies used on the team.",
    ],
  },
    {
    id: 4,
    role: "Fullstack Developer",
    company: "Freelance",
    duration: "January 2024 – Feb 2025",
    location: "Jakarta, Indonesia",
    description: [
      "Produced and implemented the full application architecture using C# and ASP.NET in Visual Studio ",
      "Applied Object-Oriented Programming (OOP) principles to ensure a clean and maintainable codebase",
      "Built a full-stack web application using the Laravel 11 MVC framework as part of a Web Programming course and MySQL as database ",
      "Styled responsive UI components using Tailwind CSS for a modern and clean user interface "
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="experience"
      style={{
        background: "#06090f",
        padding: "100px 24px",
        borderTop: "0.5px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: 64 }}>
          <p
            style={{
              color: "#4f7cff",
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Background
          </p>
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              color: "#f5f5f5",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.1,
            }}
          >
            My{" "}
            <span style={{ color: "#a78bfa", fontStyle: "italic" }}>
              Experience
            </span>
          </h2>
          <div
            style={{
              width: 40,
              height: 1,
              background: "linear-gradient(90deg, #4f7cff, #a78bfa)",
              margin: "20px auto 0",
            }}
          />
        </div>

        {/* Tab + content layout */}
        <div
          style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 0 }}
        >
          {/* Left: tab list */}
          <div
            style={{
              borderRight: "0.5px solid rgba(255,255,255,0.08)",
              paddingRight: 0,
            }}
          >
            {experiences.map((exp, index) => (
              <button
                key={exp.id}
                onClick={() => setActive(index)}
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "left",
                  padding: "20px 24px",
                  background: "transparent",
                  border: "none",
                  borderLeft:
                    active === index
                      ? "2px solid #4f7cff"
                      : "2px solid transparent",
                  borderBottom: "0.5px solid rgba(255,255,255,0.05)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <p
                  style={{
                    color: active === index ? "#f5f5f5" : "#555",
                    fontSize: 13,
                    fontWeight: 500,
                    marginBottom: 4,
                    transition: "color 0.2s",
                    letterSpacing: "0.02em",
                  }}
                >
                  {exp.company}
                </p>
                <p
                  style={{
                    color: active === index ? "#4f7cff" : "#4b5a7a",
                    fontSize: 11,
                    letterSpacing: "0.06em",
                    transition: "color 0.2s",
                  }}
                >
                  {exp.duration}
                </p>
              </button>
            ))}
          </div>

          {/* Right: active content */}
          <div style={{ padding: "8px 0 8px 48px" }}>
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                style={{
                  display: active === index ? "block" : "none",
                }}
              >
                <div style={{ marginBottom: 24 }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-sans)",
                      color: "#f5f5f5",
                      fontSize: 24,
                      fontWeight: 700,
                      marginBottom: 6,
                    }}
                  >
                    {exp.role}
                  </h3>
                  <p
                    style={{ color: "#4f7cff", fontSize: 14, marginBottom: 4 }}
                  >
                    {exp.company}
                  </p>
                  <div
                    style={{ display: "flex", gap: 16, alignItems: "center" }}
                  >
                    <span
                      style={{
                        color: "#555",
                        fontSize: 12,
                        letterSpacing: "0.06em",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#555"
                        strokeWidth="2"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {exp.duration}
                    </span>
                    <span
                      style={{
                        color: "#555",
                        fontSize: 12,
                        letterSpacing: "0.06em",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#555"
                        strokeWidth="2"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    width: 32,
                    height: 1,
                    background: "rgba(79,124,255,0.3)",
                    marginBottom: 24,
                  }}
                />

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}
                >
                  {exp.description.map((point, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        gap: 16,
                        color: "#777",
                        fontSize: 14,
                        lineHeight: 1.8,
                      }}
                    >
                      <span
                        style={{
                          color: "#4f7cff",
                          marginTop: 2,
                          flexShrink: 0,
                          fontSize: 16,
                        }}
                      >
                        {"\u25B8"}
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
