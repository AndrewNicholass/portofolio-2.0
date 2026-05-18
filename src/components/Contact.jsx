export default function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "andrew.nicholas@email.com",
      href: "mailto:andrew.nicholas@email.com",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/andrew-nicholas",
      href: "https://linkedin.com/in/andrew-nicholas",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      style={{
        background: "#06090f",
        padding: "100px 24px 80px",
        borderTop: "0.5px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: 64, textAlign: "center" }}>
          <p
            style={{
              color: "#4f7cff",
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Contact
          </p>
          <h2
            style={{
              fontFamily: "var(--font-sans)",
              color: "#f5f5f5",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Get In{" "}
            <span style={{ color: "#a78bfa", fontStyle: "italic" }}>Touch</span>
          </h2>
          <div
            style={{
              width: 40,
              height: 1,
              background: "linear-gradient(90deg, #4f7cff, #a78bfa)",
              margin: "0 auto 24px",
            }}
          />
          <p
            style={{
              color: "#8892a4",
              fontSize: 15,
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Have a project in mind or just want to say hello? Feel free to reach
            out — I am always open to new opportunities.
          </p>
        </div>

        {/* Contact cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 16,
            maxWidth: 640,
            margin: "0 auto 64px",
          }}
        >
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                padding: "28px 32px",
                border: "0.5px solid rgba(255,255,255,0.08)",
                textDecoration: "none",
                background: "#0a0e16",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(79,124,255,0.3)";
                e.currentTarget.style.background = "#081025";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.background = "#0a0e16";
              }}
            >
              {/* Icon box */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  border: "0.5px solid rgba(79,124,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#4f7cff",
                  flexShrink: 0,
                  background: "rgba(79,124,255,0.08)",
                }}
              >
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <p
                  style={{
                    color: "#8892a4",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  {item.label}
                </p>
                <p style={{ color: "#4f7cff", fontSize: 14 }}>{item.value}</p>
              </div>

              {/* Arrow */}
              <svg
                style={{ marginLeft: "auto", color: "#556178", flexShrink: 0 }}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            textAlign: "center",
            borderTop: "0.5px solid rgba(255,255,255,0.05)",
            paddingTop: 40,
          }}
        >
          <p
            style={{
              color: "#4f7cff",
              fontFamily: "'Playfair Display', serif",
              fontSize: 18,
              fontWeight: 700,
              marginBottom: 12,
            }}
          >
            A<span style={{ color: "#556178" }}>.</span>N
          </p>
          <p style={{ color: "#8892a4", fontSize: 12, letterSpacing: "0.1em" }}>
            {new Date().getFullYear()} Andrew Nicholas. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
