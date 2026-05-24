/* global React, Section, S50Button, Chip, Icon, S50Logo, ClassCard, StatCard, MobileTabBar */
const { useState: useStateApp } = React;

/* ============================================================
   APPLICATIONS — Mobile · Dashboard · In-Gym · Landing
   ============================================================ */
function ApplicationsSection() {
  return (
    <Section
      id="applications"
      eyebrow="07 · In the wild"
      title="Applications"
      lede="Как дизайн-система живёт на четырёх ключевых поверхностях: мобильное приложение клиента, дашборд менеджера, экраны в зале и маркетинговый сайт."
      bg="var(--bg-sunken)"
    >
      {/* Mobile + Dashboard row */}
      <div style={{ display: "grid", gridTemplateColumns: "380px 1fr", gap: 32, marginBottom: 48 }}>
        <PhoneFrame>
          <MobileScreen />
        </PhoneFrame>

        <DashboardMockup />
      </div>

      {/* In-gym + Landing */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 48 }}>
        <InGymScreen />
        <LandingHero />
      </div>
    </Section>
  );
}

/* ============================================================
   PHONE FRAME
   ============================================================ */
function PhoneFrame({ children }) {
  return (
    <div
      style={{
        background: "var(--ink-950)",
        borderRadius: 44,
        padding: 10,
        boxShadow: "0 30px 80px rgba(0,0,0,.25), 0 8px 20px rgba(0,0,0,.15)",
        position: "relative",
        margin: "0 auto",
        width: 380,
      }}
    >
      <div
        style={{
          background: "var(--ink-950)",
          borderRadius: 36,
          overflow: "hidden",
          position: "relative",
          aspectRatio: "9 / 19",
        }}
      >
        {/* Status bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 44,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 28px",
            zIndex: 10,
            color: "var(--ink-0)",
            fontSize: 13,
            fontWeight: 700,
          }}
        >
          <span>9:41</span>
          <div
            style={{
              width: 100,
              height: 28,
              background: "#000",
              borderRadius: 999,
              position: "absolute",
              top: 8,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
          <span style={{ display: "flex", gap: 4, alignItems: "center" }}>
            <span style={{ fontSize: 10 }}>●●●●</span>
            <span style={{ fontSize: 10 }}>5G</span>
            <span
              style={{
                width: 22,
                height: 11,
                borderRadius: 2,
                border: "1.2px solid #fff",
                position: "relative",
                marginLeft: 4,
              }}
            >
              <span style={{ position: "absolute", inset: 1, background: "#fff", width: "70%", borderRadius: 1 }} />
            </span>
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

/* ============================================================
   MOBILE SCREEN — Booking
   ============================================================ */
function MobileScreen() {
  const [sel, setSel] = useStateApp(2);
  const days = [
    { d: "MON", n: 26 }, { d: "TUE", n: 27 }, { d: "WED", n: 28 },
    { d: "THU", n: 29 }, { d: "FRI", n: 30 }, { d: "SAT", n: 31 },
  ];
  return (
    <div
      style={{
        background: "var(--ink-950)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        color: "#fff",
        paddingTop: 54,
      }}
    >
      {/* Header */}
      <div style={{ padding: "16px 24px 8px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "var(--ink-400)", textTransform: "uppercase" }}>
            VAKE · Tbilisi
          </span>
          <Icon name="bell" size={20} color="#fff" />
        </div>
        <div
          className="display-italic"
          style={{ fontSize: 44, lineHeight: 1.12, color: "#fff", letterSpacing: "-0.02em" }}
        >
          PICK YOUR<br />
          <span className="s50-mark">50</span>
        </div>
      </div>

      {/* Day picker */}
      <div style={{ padding: "20px 24px 8px", display: "flex", gap: 8, overflow: "hidden" }}>
        {days.map((d, i) => {
          const active = sel === i;
          return (
            <button
              key={i}
              onClick={() => setSel(i)}
              style={{
                all: "unset",
                cursor: "pointer",
                background: active ? "var(--brand-yellow)" : "rgba(255,255,255,0.06)",
                color: active ? "var(--ink-900)" : "#fff",
                padding: "10px 4px",
                width: 44,
                textAlign: "center",
                borderRadius: 8,
                flexShrink: 0,
              }}
            >
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.08em", opacity: active ? 1 : 0.7 }}>{d.d}</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontStyle: "italic", fontSize: 20, lineHeight: 1, marginTop: 2 }}>
                {d.n}
              </div>
            </button>
          );
        })}
      </div>

      {/* Filters */}
      <div style={{ padding: "12px 24px", display: "flex", gap: 6, flexWrap: "nowrap", overflow: "hidden" }}>
        {["All", "HIIT", "Strength", "Cycle", "Box"].map((f, i) => (
          <span
            key={f}
            style={{
              fontSize: 11,
              fontWeight: 700,
              padding: "6px 12px",
              borderRadius: 999,
              background: i === 0 ? "#fff" : "transparent",
              color: i === 0 ? "var(--ink-900)" : "var(--ink-300)",
              border: i === 0 ? "1px solid #fff" : "1px solid rgba(255,255,255,0.15)",
              whiteSpace: "nowrap",
            }}
          >
            {f}
          </span>
        ))}
      </div>

      {/* Class list */}
      <div style={{ flex: 1, padding: "8px 24px 24px", display: "flex", flexDirection: "column", gap: 8, overflow: "hidden" }}>
        {[
          { t: "07:00", n: "HIIT Strength", c: "Alex K.", s: "3 spots left", hot: true },
          { t: "09:30", n: "Box 50",        c: "Marina V.", s: "8 spots left" },
          { t: "12:00", n: "Cycle Power",   c: "Daniel R.", s: "Waitlist", full: true },
        ].map((c, i) => (
          <div
            key={i}
            style={{
              background: c.hot ? "var(--brand-yellow)" : "rgba(255,255,255,0.06)",
              color: c.hot ? "var(--ink-900)" : "#fff",
              borderRadius: 12,
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: 14,
              opacity: c.full ? 0.55 : 1,
            }}
          >
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontStyle: "italic", fontSize: 26, lineHeight: 1 }}>
                {c.t}
              </div>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", opacity: 0.7, marginTop: 2 }}>50 MIN</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 15, letterSpacing: "-0.01em" }}>{c.n}</div>
              <div style={{ fontSize: 11, opacity: 0.8, marginTop: 2 }}>{c.c}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 10, fontWeight: 600, opacity: 0.8 }}>{c.s}</div>
              <div
                style={{
                  marginTop: 6,
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  padding: "4px 10px",
                  background: c.hot ? "var(--ink-900)" : c.full ? "transparent" : "#fff",
                  color: c.hot ? "var(--brand-yellow)" : c.full ? "#fff" : "var(--ink-900)",
                  border: c.full ? "1px solid rgba(255,255,255,0.3)" : "none",
                  borderRadius: 4,
                  display: "inline-block",
                  textTransform: "uppercase",
                }}
              >
                {c.full ? "Wait" : "Book"}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tab bar */}
      <div
        style={{
          padding: "8px 16px 18px",
          background: "var(--ink-900)",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {[
          { n: "home", l: "Home", a: false },
          { n: "calendar", l: "Book", a: true },
          { n: "bolt", l: "Train", a: false },
          { n: "user", l: "Me", a: false },
        ].map((t) => (
          <div
            key={t.n}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              color: t.a ? "var(--brand-yellow)" : "var(--ink-400)",
            }}
          >
            <Icon name={t.n} size={20} />
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>{t.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   DASHBOARD MOCKUP
   ============================================================ */
function DashboardMockup() {
  return (
    <div
      style={{
        background: "var(--ink-0)",
        borderRadius: 12,
        overflow: "hidden",
        border: "1px solid var(--ink-150)",
        boxShadow: "0 30px 80px rgba(0,0,0,.08), 0 8px 20px rgba(0,0,0,.05)",
        color: "var(--ink-900)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Window chrome */}
      <div style={{ background: "var(--ink-50)", padding: "10px 14px", borderBottom: "1px solid var(--ink-150)", display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FF5F57" }} />
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FFBD2E" }} />
        <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28C840" }} />
        <span style={{ marginLeft: 16, fontSize: 11, color: "var(--ink-500)", fontFamily: "var(--font-mono)" }}>
          studio50.app/dashboard
        </span>
      </div>

      {/* Top bar — graphite, brand always sits on its own dark surface */}
      <div style={{ padding: "14px 28px", background: "var(--brand-graphite)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <S50Logo height={22} />
          <nav style={{ display: "flex", gap: 24 }}>
            {["Overview", "Schedule", "Members", "Studios"].map((n, i) => (
              <span
                key={n}
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: i === 0 ? "var(--ink-0)" : "var(--ink-300)",
                  borderBottom: i === 0 ? "2px solid var(--brand-yellow)" : "2px solid transparent",
                  paddingBottom: 2,
                }}
              >
                {n}
              </span>
            ))}
          </nav>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              padding: "6px 10px",
              background: "rgba(255,255,255,0.08)",
              borderRadius: 4,
              color: "var(--ink-200)",
              letterSpacing: "0.08em",
            }}
          >
            VAKE · TBL
          </div>
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--brand-yellow)", color: "var(--ink-900)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800 }}>
            AK
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "24px 28px" }}>
        {/* Title row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 20 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 6 }}>OVERVIEW · TODAY</div>
            <div className="display-italic" style={{ fontSize: 36, color: "var(--ink-900)", lineHeight: 1 }}>
              <span className="s50-mark">238</span> CHECK-INS
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <span style={{ fontSize: 11, padding: "6px 12px", borderRadius: 999, background: "var(--ink-900)", color: "#fff", fontWeight: 700 }}>Today</span>
            <span style={{ fontSize: 11, padding: "6px 12px", borderRadius: 999, background: "var(--ink-50)", color: "var(--ink-600)", fontWeight: 600 }}>Week</span>
            <span style={{ fontSize: 11, padding: "6px 12px", borderRadius: 999, background: "var(--ink-50)", color: "var(--ink-600)", fontWeight: 600 }}>Month</span>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 20 }}>
          {[
            { l: "Bookings", v: "412", d: "+12%" },
            { l: "Revenue", v: "₽284K", d: "+8%" },
            { l: "Avg occupancy", v: "82%", d: "+4%" },
            { l: "No-shows", v: "9", d: "-3%", good: true },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                padding: "16px 16px 14px",
                border: "1px solid var(--ink-150)",
                borderRadius: 8,
                background: i === 0 ? "var(--ink-900)" : "var(--ink-0)",
                color: i === 0 ? "#fff" : "var(--ink-900)",
              }}
            >
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7, marginBottom: 8 }}>{s.l}</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span className="display-italic" style={{ fontSize: 28, lineHeight: 1, color: i === 0 ? "var(--brand-yellow)" : "var(--ink-900)" }}>{s.v}</span>
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, color: "var(--success)", marginTop: 4 }}>{s.d}</div>
            </div>
          ))}
        </div>

        {/* Chart + Schedule grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 12 }}>
          {/* Chart */}
          <div style={{ padding: "18px 20px 14px", border: "1px solid var(--ink-150)", borderRadius: 8, background: "var(--ink-0)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
              <span style={{ fontSize: 13, fontWeight: 700, color: "var(--ink-900)" }}>Weekly check-ins</span>
              <span style={{ fontSize: 11, color: "var(--ink-500)" }}>vs last week</span>
            </div>
            {/* Bar chart */}
            <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 110 }}>
              {[40, 55, 70, 50, 85, 95, 62].map((h, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, height: "100%" }}>
                  <div style={{ flex: 1, width: "100%", display: "flex", alignItems: "flex-end" }}>
                    <div
                      style={{
                        width: "100%",
                        height: `${h}%`,
                        background: i === 5 ? "var(--brand-yellow)" : "var(--ink-150)",
                        borderRadius: "2px 2px 0 0",
                      }}
                    />
                  </div>
                  <span style={{ fontSize: 10, color: "var(--ink-500)", fontWeight: 600 }}>{["M","T","W","T","F","S","S"][i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule */}
          <div style={{ padding: "18px 20px", border: "1px solid var(--ink-150)", borderRadius: 8, background: "var(--ink-0)" }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--ink-900)", marginBottom: 14 }}>Next up</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { t: "18:00", n: "HIIT Strength", b: 22, c: 24 },
                { t: "19:00", n: "Box 50", b: 18, c: 24 },
                { t: "20:00", n: "Cycle", b: 24, c: 24, full: true },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: 10, borderBottom: i < 2 ? "1px solid var(--ink-100)" : "none" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontStyle: "italic", fontSize: 18, color: "var(--ink-900)", width: 50 }}>{c.t}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "var(--ink-900)" }}>{c.n}</div>
                    <div style={{ marginTop: 4, height: 4, background: "var(--ink-100)", borderRadius: 2, overflow: "hidden" }}>
                      <div style={{ width: `${(c.b / c.c) * 100}%`, height: "100%", background: c.full ? "var(--error)" : "var(--brand-yellow)" }} />
                    </div>
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: c.full ? "var(--error)" : "var(--ink-600)", fontWeight: 600, minWidth: 36, textAlign: "right" }}>
                    {c.b}/{c.c}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   IN-GYM SCREEN (lobby display)
   ============================================================ */
function InGymScreen() {
  return (
    <div
      style={{
        background: "var(--ink-950)",
        borderRadius: 12,
        overflow: "hidden",
        aspectRatio: "16 / 10",
        color: "#fff",
        position: "relative",
      }}
    >
      {/* Background photo — same shot as the divider after Icons */}
      <img
        src={window.__asset("assets/photo-divider-3.jpg")}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />

      {/* Dark gradient overlay for legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(15,16,18,0.85) 0%, rgba(15,16,18,0.55) 50%, rgba(15,16,18,0.85) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Content overlay */}
      <div style={{ position: "absolute", inset: 0, padding: 32, display: "flex", flexDirection: "column" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "var(--brand-yellow)" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <S50Logo height={22} />
          <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 11, color: "var(--ink-200)", fontWeight: 600 }}>
            <span style={{ width: 6, height: 6, background: "var(--success)", borderRadius: "50%" }} />
            LIVE · VAKE · 18:42
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 24 }}>
          <div className="eyebrow" style={{ color: "var(--brand-yellow)", marginBottom: 32 }}>UP NEXT · STARTING IN</div>
          <div className="display-italic" style={{ fontSize: 96, lineHeight: 1.05, color: "var(--ink-0)" }}>
            <span className="s50-mark--offset">18</span>:00
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, marginTop: 12, letterSpacing: "-0.01em" }}>
            HIIT Strength · 50 min
          </div>
          <div style={{ fontSize: 13, color: "var(--ink-200)", marginTop: 6 }}>
            Studio A · Coach Alex K. · 22 / 24 booked
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
          <div style={{ flex: 1, padding: "12px 14px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", borderRadius: 8 }}>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", color: "var(--ink-200)", textTransform: "uppercase" }}>NEXT · 19:00</div>
            <div style={{ fontSize: 13, fontWeight: 700, marginTop: 4 }}>Box 50 · Marina V.</div>
          </div>
          <div style={{ flex: 1, padding: "12px 14px", background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", borderRadius: 8 }}>
            <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", color: "var(--ink-200)", textTransform: "uppercase" }}>NEXT · 20:00</div>
            <div style={{ fontSize: 13, fontWeight: 700, marginTop: 4 }}>Cycle · Daniel R.</div>
          </div>
          <div style={{ width: 70, background: "var(--brand-yellow)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon name="qr" size={36} color="var(--ink-900)" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   LANDING HERO (web)
   ============================================================ */
function LandingHero() {
  return (
    <div
      style={{
        background: "var(--ink-0)",
        borderRadius: 12,
        overflow: "hidden",
        border: "1px solid var(--ink-150)",
        aspectRatio: "16 / 10",
        display: "flex",
        flexDirection: "column",
        color: "var(--ink-900)",
        position: "relative",
      }}
    >
      {/* Top bar — graphite */}
      <div style={{ padding: "14px 24px", background: "var(--brand-graphite)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <S50Logo height={18} />
        <nav style={{ display: "flex", gap: 20, fontSize: 11, fontWeight: 600, color: "var(--ink-300)" }}>
          <span>Schedule</span><span>Studios</span><span>Membership</span><span>Shop</span>
        </nav>
        <div
          style={{
            fontSize: 10,
            fontWeight: 800,
            background: "var(--brand-yellow)",
            color: "var(--ink-900)",
            padding: "8px 16px",
            borderRadius: 999,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Book a class
        </div>
      </div>

      {/* Hero */}
      <div style={{ flex: 1, padding: "28px 32px", display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 24, alignItems: "center" }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>BOUTIQUE FITNESS · 12 STUDIOS</div>
          <div className="display-italic" style={{ fontSize: 56, lineHeight: 1.1, color: "var(--ink-900)" }}>
            FIFTY<br />
            MINUTES.<br />
            <span className="s50-mark">
              ZERO
            </span>{" "}
            EXCUSES.
          </div>
          <p style={{ fontSize: 12, color: "var(--ink-500)", marginTop: 14, maxWidth: 320, lineHeight: 1.55 }}>
            Высокоинтенсивные групповые тренировки в формате 50 минут. Силовая, бокс, сайкл, HIIT — все форматы под одной крышей.
          </p>
          <div style={{ marginTop: 20, display: "flex", gap: 8 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                background: "var(--brand-yellow)",
                color: "var(--ink-900)",
                padding: "10px 18px",
                borderRadius: 999,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Start free trial
            </div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                background: "transparent",
                color: "var(--ink-900)",
                padding: "10px 18px",
                borderRadius: 999,
                border: "1.5px solid var(--ink-200)",
              }}
            >
              View schedule
            </div>
          </div>
        </div>

        {/* Visual */}
        <div style={{ position: "relative", aspectRatio: "3 / 4", borderRadius: 8, overflow: "hidden" }}>
          <img
            src={window.__asset("assets/photo-divider-3.jpg")}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Overlay text */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              padding: 20,
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              pointerEvents: "none",
              background: "linear-gradient(to bottom, rgba(0,0,0,.35) 0%, transparent 30%, transparent 60%, rgba(0,0,0,.55) 100%)",
              borderRadius: 8,
            }}
          >
            <div>
              <div className="eyebrow" style={{ color: "var(--brand-yellow)" }}>SIGNATURE</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontStyle: "italic", fontSize: 24, color: "#fff", letterSpacing: "-0.025em", marginTop: 4, textTransform: "uppercase" }}>
                HIIT<br />STRENGTH
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div className="display-italic" style={{ fontSize: 80, lineHeight: 0.85, color: "var(--brand-yellow)" }}>
                50
              </div>
              <div style={{ fontSize: 9, fontWeight: 700, color: "var(--ink-200)", letterSpacing: "0.12em", textTransform: "uppercase", textAlign: "right" }}>
                Min<br />Class
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ApplicationsSection, PhoneFrame, MobileScreen, DashboardMockup, InGymScreen, LandingHero });
