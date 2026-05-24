/* global React, S50Logo, Section, Swatch, S50Button, Chip, S50Input, Switch, Icon */
const { useState: useStateSp } = React;

/* ============================================================
   HERO — system intro
   ============================================================ */
function Hero() {
  return (
    <section
      style={{
        background: "var(--brand-graphite)",
        color: "var(--ink-0)",
        padding: "72px 0 96px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Yellow bar — signature element */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          background: "var(--brand-yellow)",
        }}
      />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 64 }}>
          <S50Logo height={36} mode="dark" />
          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <span className="eyebrow" style={{ color: "var(--ink-300)" }}>
              Brand Book · v1.0 · 2026
            </span>
            <ThemeToggle />
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64, alignItems: "end" }}>
          <div>
            <div className="eyebrow" style={{ color: "var(--brand-yellow)", marginBottom: 24 }}>
              Цифровая дизайн-система
            </div>
            <h1
              className="display-italic"
              style={{
                fontSize: "clamp(72px, 9vw, 144px)",
                lineHeight: 1.1,
                margin: 0,
                color: "var(--ink-0)",
              }}
            >
              <span className="s50-mark">
                SWEAT
              </span>{" "}
              IN<br />
              <span className="s50-mark">
                FIFTY
              </span>{" "}
              MINUTES.
            </h1>
            <p
              style={{
                marginTop: 32,
                maxWidth: 560,
                fontSize: 17,
                lineHeight: 1.55,
                color: "var(--ink-300)",
              }}
            >
              Дизайн-система для всех цифровых продуктов сети STUDIO 50 —
              мобильное приложение, лендинг, личный кабинет и экраны в залах. Графит, жёлтый маркер,
              плотная типографика, ничего лишнего.
            </p>
            <div style={{ marginTop: 40, display: "flex", gap: 12 }}>
              <S50Button variant="primary" size="lg">
                Book a class
              </S50Button>
              <S50Button
                variant="ghost"
                size="lg"
                onClick={() => document.getElementById("colors")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span style={{ color: "var(--ink-0)" }}>Explore the system</span>
              </S50Button>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, background: "var(--ink-700)", border: "1px solid var(--ink-700)" }}>
            {[
              { k: "Yellow", v: "#FFE500" },
              { k: "Graphite", v: "#2A2B2F" },
              { k: "Studios", v: "12" },
              { k: "Minutes", v: "50" },
            ].map((c, i) => (
              <div
                key={i}
                style={{
                  background: "var(--brand-graphite)",
                  padding: "24px 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 120,
                }}
              >
                <div style={{ fontSize: 11, color: "var(--ink-400)", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 700 }}>
                  {c.k}
                </div>
                <div className="display-italic" style={{ fontSize: 36, color: "var(--ink-0)" }}>
                  {c.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   THEME TOGGLE
   ============================================================ */
function ThemeToggle() {
  const [theme, setTheme] = useStateSp(
    typeof document !== "undefined"
      ? document.documentElement.getAttribute("data-theme") || "light"
      : "light"
  );
  const apply = (t) => {
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem("s50-theme", t); } catch (e) {}
  };
  return (
    <div
      style={{
        display: "inline-flex",
        background: "var(--ink-800)",
        borderRadius: "var(--r-pill)",
        padding: 3,
        gap: 0,
        border: "1px solid var(--ink-700)",
      }}
    >
      {["light", "dark"].map((t) => (
        <button
          key={t}
          onClick={() => apply(t)}
          style={{
            all: "unset",
            cursor: "pointer",
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            padding: "6px 12px",
            borderRadius: 999,
            background: theme === t ? "var(--brand-yellow)" : "transparent",
            color: theme === t ? "var(--ink-900)" : "var(--ink-300)",
            transition: "all var(--t-fast) var(--ease-out)",
          }}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

/* ============================================================
   COLORS SECTION
   ============================================================ */
function ColorsSection() {
  const inkScale = [
    { n: "Ink 0",   t: "--ink-0",   v: "#FFFFFF" },
    { n: "Ink 25",  t: "--ink-25",  v: "#FAFAFB" },
    { n: "Ink 50",  t: "--ink-50",  v: "#F4F4F5" },
    { n: "Ink 100", t: "--ink-100", v: "#EAEAEC" },
    { n: "Ink 150", t: "--ink-150", v: "#DCDCDF" },
    { n: "Ink 200", t: "--ink-200", v: "#C8C8CC" },
    { n: "Ink 300", t: "--ink-300", v: "#ABACB1" },
    { n: "Ink 400", t: "--ink-400", v: "#86878D" },
    { n: "Ink 500", t: "--ink-500", v: "#66676D" },
    { n: "Ink 600", t: "--ink-600", v: "#4A4B50" },
    { n: "Ink 700", t: "--ink-700", v: "#34353A" },
    { n: "Ink 800", t: "--ink-800", v: "#2A2B2F" },
    { n: "Ink 900", t: "--ink-900", v: "#1B1C1F" },
    { n: "Ink 950", t: "--ink-950", v: "#0F1012" },
  ];

  return (
    <Section
      id="colors"
      eyebrow="01 · Palette"
      title="Colors"
      lede="Графит — основа. Жёлтый — редкий, «заряженный» акцент. Нейтральная шкала Ink закрывает все поверхности и уровни текста. Семантика приглушённая, чтобы жёлтый оставался главным фирменным цветом."
    >
      {/* Brand row */}
      <div style={{ marginBottom: 48 }}>
        <div className="eyebrow" style={{ marginBottom: 16, color: "var(--text-secondary)" }}>
          Бренд
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          <Swatch big name="Brand Yellow"   token="--brand-yellow"   hex="#FFE500" role="Primary CTA, marker highlights, brand moments. Used sparingly — never as a flat background for body text." />
          <Swatch big name="Graphite"        token="--brand-graphite"  hex="#2A2B2F" role="Primary dark surface. Logo background, dark-theme base." />
          <Swatch big name="Graphite Deep"   token="--brand-graphite-deep" hex="#1B1C1F" role="Recessed surfaces, modals on dark, headers." />
          <Swatch big name="Pure White"      token="--ink-0"            hex="#FFFFFF" role="Primary light surface and text-on-dark. Maximum contrast." />
        </div>
      </div>

      {/* Yellow scale */}
      <div style={{ marginBottom: 48 }}>
        <div className="eyebrow" style={{ marginBottom: 16, color: "var(--text-secondary)" }}>
          Жёлтый · состояния
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          <Swatch name="Yellow / Default" token="--brand-yellow"         hex="#FFE500" role="Base accent" />
          <Swatch name="Yellow / Hover"   token="--brand-yellow-hover"   hex="#F5DC00" role="Hover state on CTA" />
          <Swatch name="Yellow / Pressed" token="--brand-yellow-pressed" hex="#E6CD00" role="Active / pressed" />
          <Swatch name="Yellow / Soft"    token="--brand-yellow-soft"    hex="#FFF6A8" role="Backgrounds, badges" />
        </div>
      </div>

      {/* Ink scale */}
      <div style={{ marginBottom: 48 }}>
        <div className="eyebrow" style={{ marginBottom: 16, color: "var(--text-secondary)" }}>
          Ink · нейтральная шкала (14 ступеней)
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(7, 1fr)",
            gap: 0,
            border: "1px solid var(--border)",
            borderRadius: "var(--r-lg)",
            overflow: "hidden",
          }}
        >
          {inkScale.map((s, i) => (
            <div
              key={i}
              style={{
                background: s.v,
                padding: "16px 14px",
                minHeight: 100,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                color: i >= 8 ? "#fff" : "var(--ink-900)",
                borderRight: (i + 1) % 7 === 0 ? "none" : "1px solid rgba(255,255,255,.04)",
                borderBottom: i < 7 ? "1px solid rgba(255,255,255,.04)" : "none",
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", opacity: 0.85 }}>
                {s.n.replace("Ink ", "")}
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, opacity: 0.85 }}>
                {s.v}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Semantic */}
      <div>
        <div className="eyebrow" style={{ marginBottom: 16, color: "var(--text-secondary)" }}>
          Семантика
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          <Swatch name="Success" token="--success" hex="#1FB57A" role="Confirmations, paid, checked-in" />
          <Swatch name="Warning" token="--warning" hex="#FF9F1C" role="Capacity, waitlist, pending" />
          <Swatch name="Error"   token="--error"   hex="#E84A4A" role="Form errors, cancellations" />
          <Swatch name="Info"    token="--info"    hex="#3B82F6" role="Tips, neutral info banners" />
        </div>
      </div>

      {/* Usage rule */}
      <div
        style={{
          marginTop: 64,
          padding: 32,
          background: "var(--bg-sunken)",
          borderRadius: "var(--r-lg)",
          border: "1px solid var(--border-subtle)",
          display: "grid",
          gridTemplateColumns: "200px 1fr",
          gap: 32,
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            height: 140,
            background: "var(--brand-graphite)",
            borderRadius: "var(--r-md)",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", inset: 0, background: "var(--brand-graphite)" }} />
          <div style={{ position: "absolute", left: 0, bottom: 0, width: "70%", height: "100%", background: "#FFFFFF" }} />
          <div style={{ position: "absolute", left: 0, bottom: 0, width: "15%", height: "100%", background: "var(--brand-yellow)" }} />
          <div style={{ position: "absolute", left: "8px", top: "8px", fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", color: "var(--ink-0)", textTransform: "uppercase" }}>
            70 · 15 · 15
          </div>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 8 }}>Правило 70 · 15 · 15</div>
          <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--text-primary)", margin: 0 }}>
            На любом экране: <b>~70%</b> поверхности — нейтраль (белый или графит), <b>~15%</b> — инверсная поверхность (графит/белый), <b>~15%</b> — жёлтый акцент. Жёлтый никогда не используется как фон длинных текстов и не ставится рядом с цветной семантикой в одной зоне.
          </p>
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   TYPOGRAPHY SECTION
   ============================================================ */
function TypeSection() {
  return (
    <Section
      id="type"
      eyebrow="02 · Type"
      title="Typography"
      lede="Одна гарнитура во всех продуктах — Helvetica Neue. Заголовки: Heavy Italic — наследует жирный курсивный характер логотипа. Текст: Regular и Medium, без наклона. Полная поддержка латиницы и кириллицы через системные фолбэки Helvetica → Arial на Windows."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          marginBottom: 48,
        }}
      >
        <div
          style={{
            padding: "32px 36px",
            background: "var(--brand-graphite)",
            color: "var(--ink-0)",
            borderRadius: "var(--r-lg)",
          }}
        >
          <div className="eyebrow" style={{ color: "var(--brand-yellow)", marginBottom: 16 }}>Display · Helvetica Neue Heavy Italic</div>
          <div className="display-italic" style={{ fontSize: 88, lineHeight: 1.12, color: "var(--ink-0)" }}>
            STRONGER<br />
            <span className="s50-mark">EVERY</span> REP
          </div>
          <div style={{ marginTop: 24, display: "flex", gap: 24, fontSize: 12, color: "var(--ink-300)", fontFamily: "var(--font-mono)" }}>
            <span>900 italic</span>
            <span>letter-spacing: -.025em</span>
            <span>line-height: .95</span>
          </div>
        </div>
        <div
          style={{
            padding: "32px 36px",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "var(--r-lg)",
          }}
        >
          <div className="eyebrow" style={{ marginBottom: 16 }}>Text · Helvetica Neue Regular</div>
          <div style={{ fontFamily: "var(--font-text)", fontWeight: 700, fontSize: 30, lineHeight: 1.15, color: "var(--text-primary)", letterSpacing: "-0.015em" }}>
            Book your next 50-minute class
          </div>
          <p style={{ fontFamily: "var(--font-text)", fontWeight: 400, fontSize: 16, lineHeight: 1.55, color: "var(--text-secondary)", marginTop: 12, marginBottom: 0 }}>
            High-intensity strength and conditioning, designed in fifty-minute blocks.
            Pick your studio, coach and time — the rest happens here.
          </p>
          <div style={{ marginTop: 24, display: "flex", gap: 24, fontSize: 12, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>
            <span>400 · 500 · 700</span>
            <span>upright · Latin + Cyrillic</span>
          </div>
        </div>
      </div>

      {/* Scale table */}
      <div
        style={{
          border: "1px solid var(--border)",
          borderRadius: "var(--r-lg)",
          overflow: "hidden",
          background: "var(--surface)",
        }}
      >
        {[
          { name: "Display XL", sample: "STRONGER", size: 88, family: "Display · 900 italic", token: "--display-xl", use: "Hero, landing" },
          { name: "Display L",  sample: "FIFTY",   size: 64, family: "Display · 900 italic", token: "--display-l", use: "Big numbers, hero" },
          { name: "Display M",  sample: "This Week", size: 40, family: "Display · 700 italic", token: "--display-m", use: "Section headers" },
          { name: "H1",         sample: "Book a class",   size: 32, family: "Bold · 700",       token: "--h1", use: "Screen titles" },
          { name: "H2",         sample: "Schedule",       size: 24, family: "Bold · 700",       token: "--h2", use: "Block titles" },
          { name: "H3",         sample: "HIIT Strength",  size: 20, family: "Bold · 700",       token: "--h3", use: "Card titles" },
          { name: "Body L",     sample: "A premium 50-minute boutique fitness experience", size: 18, family: "Regular · 400", token: "--body-l", use: "Lead paragraphs" },
          { name: "Body M",     sample: "Pick your class — we handle the rest",            size: 15, family: "Regular · 400", token: "--body-m", use: "Default body" },
          { name: "Body S",     sample: "Includes towel, shower, locker",                   size: 13, family: "Medium · 500", token: "--body-s", use: "Meta, captions" },
          { name: "Caption",    sample: "Updated 2 minutes ago",                            size: 12, family: "Medium · 500", token: "--caption", use: "Timestamps" },
          { name: "Eyebrow",    sample: "FEATURED CLASS",                                   size: 11, family: "Bold · 700 · uppercase · +14% tracking", token: "--eyebrow", use: "Section labels" },
        ].map((r, i, arr) => {
          const isDisplay = r.family.includes("italic");
          const isBold = r.family.includes("700");
          const isMedium = r.family.includes("500");
          return (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr 280px",
                alignItems: "center",
                padding: "20px 28px",
                borderBottom: i < arr.length - 1 ? "1px solid var(--divider)" : "none",
                gap: 32,
              }}
            >
              <div>
                <div style={{ fontWeight: 700, fontSize: 13, color: "var(--text-primary)" }}>{r.name}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-tertiary)", marginTop: 2 }}>
                  {r.size}px
                </div>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-text)",
                  fontWeight: isDisplay ? 900 : isBold ? 700 : isMedium ? 500 : 400,
                  fontStyle: isDisplay ? "italic" : "normal",
                  fontSize: r.size,
                  letterSpacing: isDisplay ? "-0.025em" : isBold ? "-0.015em" : "-0.005em",
                  lineHeight: r.size > 40 ? 1 : 1.3,
                  color: "var(--text-primary)",
                  textTransform: r.name === "Eyebrow" || (isDisplay && r.size >= 64) ? "uppercase" : "none",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}
              >
                {r.sample}
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-secondary)" }}>
                <div>{r.family}</div>
                <div style={{ color: "var(--text-tertiary)", marginTop: 4 }}>{r.use}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

/* ============================================================
   MARKER (signature) SECTION
   ============================================================ */
function MarkerSection() {
  return (
    <Section
      id="marker"
      eyebrow="03 · Signature"
      title="The Yellow Marker"
      lede="Жёлтая плашка из логотипа — главный фирменный приём. Используется для выделения 1–2 слов в заголовке, для метки активного состояния и как «штамп» за числом. Никогда как фон для длинного текста."
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <div
          style={{
            padding: 48,
            background: "var(--bg-sunken)",
            borderRadius: "var(--r-lg)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          <div className="eyebrow" style={{ marginBottom: 16 }}>Подсветка в заголовке</div>
          <div
            className="display-italic"
            style={{ fontSize: 56, lineHeight: 1.18, color: "var(--text-primary)" }}
          >
            BURN <span className="s50-mark--offset">EVERY</span><br />
            CALORIE.
          </div>
        </div>

        <div
          style={{
            padding: 48,
            background: "var(--bg-sunken)",
            borderRadius: "var(--r-lg)",
            border: "1px solid var(--border-subtle)",
          }}
        >
          <div className="eyebrow" style={{ marginBottom: 16 }}>Инлайн-маркер</div>
          <p style={{ fontFamily: "var(--font-text)", fontWeight: 600, fontSize: 22, lineHeight: 1.5, color: "var(--text-primary)", margin: 0 }}>
            Train for <span className="s50-mark">fifty minutes</span>, live the other twenty-three hours at full power.
          </p>
        </div>

        <div
          style={{
            padding: 48,
            background: "var(--brand-graphite)",
            borderRadius: "var(--r-lg)",
            color: "var(--ink-0)",
          }}
        >
          <div className="eyebrow" style={{ color: "var(--ink-400)", marginBottom: 16 }}>На тёмном</div>
          <div className="display-italic" style={{ fontSize: 56, lineHeight: 1.18, color: "var(--ink-0)" }}>
            <span className="s50-mark--offset">NEW</span> THIS<br />
            <span className="s50-mark--offset">WEEK</span>.
          </div>
        </div>

        <div
          style={{
            padding: 48,
            background: "var(--bg-sunken)",
            borderRadius: "var(--r-lg)",
            border: "1px solid var(--border-subtle)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div className="eyebrow" style={{ marginBottom: 16 }}>Штамп с числом</div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <span
              style={{
                background: "var(--brand-yellow)",
                color: "var(--ink-900)",
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontStyle: "italic",
                fontSize: 88,
                lineHeight: 1,
                padding: "16px 18px",
                letterSpacing: "-0.04em",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
              }}
            >
              50
            </span>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontStyle: "italic", fontSize: 26, lineHeight: 1.05, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "-0.015em" }}>
              MIN<br />CLASS
            </div>
          </div>
        </div>
      </div>

      {/* Rules */}
      <div
        style={{
          marginTop: 32,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
        }}
      >
        {[
          { ok: true,  title: "DO · 1–3 слова", desc: "Подсвети 1–2 ключевых слова в заголовке. Только в offset-band стиле." },
          { ok: true,  title: "DO · числа",   desc: "Плашка под число или короткую стату. Курсив, жирный, центрировано по высоте." },
          { ok: false, title: "DON'T · абзацы", desc: "Никогда не используй жёлтую плашку как фон для длинного текста или целых предложений." },
          { ok: false, title: "DON'T · жёлтый текст на белом", desc: "Жёлтый на белом проваливает контраст AA. Плашка работает только наоборот — жёлтая плашка, тёмный текст на ней." },
        ].map((r, i) => (
          <div
            key={i}
            style={{
              padding: 24,
              borderRadius: "var(--r-md)",
              background: "var(--surface)",
              border: `1.5px solid ${r.ok ? "var(--success)" : "var(--error)"}`,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <span
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: r.ok ? "var(--success)" : "var(--error)",
                  color: "#fff",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 13,
                  fontWeight: 800,
                }}
              >
                {r.ok ? "✓" : "×"}
              </span>
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>{r.title}</span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.5, color: "var(--text-secondary)", margin: 0 }}>{r.desc}</p>
          </div>
        ))}
      </div>

      {/* Logo placement rule */}
      <div
        style={{
          marginTop: 24,
          padding: "28px 32px",
          background: "var(--bg-sunken)",
          borderRadius: "var(--r-lg)",
          border: "1px solid var(--border-subtle)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 32,
          alignItems: "stretch",
        }}
      >
        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Правило размещения логотипа</div>
          <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--text-primary)", margin: 0 }}>
            Логотип всегда сидит на <b>графитовой поверхности</b> — это часть его идентичности.
            Если сам продукт светлый (сайт, дашборд, лендинг), то верхний бар делаем графитовым
            или оборачиваем сам логотип в графитовую плашку.
            <br /><br />
            <b>Никогда</b> не размещай логотип прямо на белом или светло-сером — жёлтые буквы «STUDIO» провалятся по контрасту и перестанут читаться.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div
            style={{
              background: "var(--brand-graphite)",
              borderRadius: "var(--r-md)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
              position: "relative",
              border: "2px solid var(--success)",
            }}
          >
            <img src={window.__asset("assets/STUDIO50.svg")} alt="STUDIO 50" style={{ height: 28, width: "auto" }} />
            <span style={{ position: "absolute", top: 8, left: 10, fontSize: 9, fontWeight: 800, letterSpacing: "0.1em", color: "var(--success)", textTransform: "uppercase" }}>
              ✓ ON GRAPHITE
            </span>
          </div>
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "var(--r-md)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
              position: "relative",
              border: "2px solid var(--error)",
              overflow: "hidden",
            }}
          >
            <img src={window.__asset("assets/STUDIO50.svg")} alt="STUDIO 50" style={{ height: 28, width: "auto", filter: "drop-shadow(0 0 0.5px rgba(0,0,0,0.05))" }} />
            <span style={{ position: "absolute", top: 8, left: 10, fontSize: 9, fontWeight: 800, letterSpacing: "0.1em", color: "var(--error)", textTransform: "uppercase" }}>
              × ON WHITE
            </span>
            <span style={{ position: "absolute", bottom: 8, right: 10, fontSize: 9, fontWeight: 700, color: "var(--error)" }}>
              "50" disappears
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
   SPACING + RADII + SHADOWS
   ============================================================ */
function SpacingSection() {
  const spacing = [
    { n: "s-1", v: 4 }, { n: "s-2", v: 8 }, { n: "s-3", v: 12 },
    { n: "s-4", v: 16 }, { n: "s-5", v: 20 }, { n: "s-6", v: 24 },
    { n: "s-8", v: 32 }, { n: "s-10", v: 40 }, { n: "s-12", v: 48 },
    { n: "s-16", v: 64 }, { n: "s-20", v: 80 }, { n: "s-24", v: 96 },
  ];
  const radii = [
    { n: "xs", v: 2 }, { n: "sm", v: 4 }, { n: "md", v: 6 },
    { n: "lg", v: 8 }, { n: "xl", v: 12 }, { n: "2xl", v: 16 }, { n: "pill", v: 999 }
  ];
  return (
    <Section
      id="spacing"
      eyebrow="04 · Foundation"
      title="Spacing & Shape"
      lede="Базовая сетка 4 px. Сдержанная шкала радиусов (4–8 px для UI-элементов, 12 px+ только для крупных карточек; pill на кнопках и инпутах). Три уровня теней. Этого достаточно."
    >
      <div className="eyebrow" style={{ marginBottom: 16, color: "var(--text-secondary)" }}>
        Шкала spacing (база 4 px)
      </div>
      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "var(--r-lg)",
          padding: 24,
          marginBottom: 40,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {spacing.map((s) => (
            <div key={s.n} style={{ display: "grid", gridTemplateColumns: "60px 60px 1fr", alignItems: "center", gap: 16 }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-secondary)" }}>{s.n}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-tertiary)" }}>{s.v}px</span>
              <div style={{ height: 16, width: s.v, background: "var(--brand-yellow)", borderRadius: 2 }} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {/* Radii */}
        <div>
          <div className="eyebrow" style={{ marginBottom: 16, color: "var(--text-secondary)" }}>Радиусы</div>
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-lg)",
              padding: 24,
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
            }}
          >
            {radii.map((r) => (
              <div key={r.n} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    background: "var(--brand-graphite)",
                    borderRadius: r.v,
                    marginBottom: 8,
                  }}
                />
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-primary)", fontWeight: 600 }}>{r.n}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-tertiary)" }}>{r.v === 999 ? "999" : `${r.v}px`}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Shadows */}
        <div>
          <div className="eyebrow" style={{ marginBottom: 16, color: "var(--text-secondary)" }}>Тени</div>
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-lg)",
              padding: 32,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {[
              { n: "sm", s: "var(--shadow-sm)" },
              { n: "md", s: "var(--shadow-md)" },
              { n: "lg", s: "var(--shadow-lg)" },
            ].map((e) => (
              <div key={e.n} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "100%",
                    height: 80,
                    background: "var(--ink-0)",
                    borderRadius: "var(--r-md)",
                    boxShadow: e.s,
                    marginBottom: 12,
                  }}
                />
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-primary)", fontWeight: 600 }}>
                  shadow-{e.n}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

Object.assign(window, { Hero, ColorsSection, TypeSection, MarkerSection, SpacingSection, ThemeToggle });
