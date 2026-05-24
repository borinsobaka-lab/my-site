/* global React, Section, S50Button, Chip, S50Input, Switch, Icon, S50Logo */
const { useState: useStateC } = React;

/* ============================================================
   COMPONENTS SECTION — Buttons, Inputs, Chips, Cards, Nav
   ============================================================ */
function ComponentsSection() {
  const [active, setActive] = useStateC("Today");
  return (
    <Section
      id="components"
      eyebrow="05 · Components"
      title="Building blocks"
      lede="Минимальный набор, покрывающий примерно 90% сценариев в приложении, на сайте и в дашборде. Каждый компонент работает и на светлой, и на тёмной поверхности."
    >
      {/* ───── BUTTONS ───── */}
      <div style={{ marginBottom: 48 }}>
        <ComponentCard title="Buttons" sub="Primary — uppercase, заряженный жёлтый. Secondary, ghost, dark — нейтральные. Все кнопки pill-формы.">
          <Row label="Основные">
            <S50Button variant="primary" size="sm">Book class</S50Button>
            <S50Button variant="primary" size="md">Book class</S50Button>
            <S50Button variant="primary" size="lg">Book class</S50Button>
            <S50Button variant="primary" size="xl">Book class</S50Button>
          </Row>
          <Row label="Дополнительные">
            <S50Button variant="secondary" size="md">View schedule</S50Button>
            <S50Button variant="secondary" size="md" icon={<Icon name="calendar" size={16} />}>This week</S50Button>
            <S50Button variant="ghost" size="md">Cancel</S50Button>
            <S50Button variant="dark" size="md">Sign in</S50Button>
            <S50Button variant="danger" size="md">Cancel booking</S50Button>
          </Row>
          <Row label="Состояния">
            <S50Button variant="primary" size="md">Default</S50Button>
            <S50Button variant="primary" size="md" disabled>Disabled</S50Button>
            <S50Button variant="primary" size="md" icon={<Icon name="play" size={14} />}>With icon</S50Button>
          </Row>
        </ComponentCard>
      </div>

      {/* ───── INPUTS ───── */}
      <div style={{ marginBottom: 48 }}>
        <ComponentCard title="Inputs & Fields" sub="Высота 44 px, капсульная форма, фокус — чёрный бордер + мягкий жёлтый ринг. Минимум декора.">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            <S50Input label="Default" placeholder="hello@studio50.com" icon={<Icon name="user" size={16} />} hint="Used for sign-in and booking" />
            <S50Input label="Focused" placeholder="HIIT, Strength, Box…" icon={<Icon name="search" size={16} />} forceFocused hint="Active state — black border + yellow ring" />
            <S50Input label="Filled" placeholder="" value="alex.k@studio50.com" icon={<Icon name="user" size={16} />} hint="Email verified" />
            <S50Input label="Error" placeholder="+995 (___) ___-___" error="Please enter a valid phone number" />
          </div>
        </ComponentCard>
      </div>

      {/* ───── CHIPS ───── */}
      <div style={{ marginBottom: 48 }}>
        <ComponentCard title="Chips · Tabs" sub="Фильтры классов, дни недели, статусы. Активный — графит или жёлтый. Та же pill-семья, что и кнопки — отличаются размером и весом.">
          <Row label="Фильтры">
            {["All", "HIIT", "Strength", "Box", "Cycle", "Yoga"].map((c) => (
              <Chip key={c} active={c === active} onClick={() => setActive(c)}>{c}</Chip>
            ))}
          </Row>
          <Row label="Теги">
            <Chip variant="yellow" icon={<Icon name="flame" size={12} />}>HIIT 50</Chip>
            <Chip variant="default" icon={<Icon name="clock" size={12} />}>50 min</Chip>
            <Chip variant="outline">2 spots left</Chip>
            <Chip variant="success" icon={<Icon name="check" size={12} />}>Checked in</Chip>
            <Chip variant="warning">Almost full</Chip>
            <Chip variant="error">Cancelled</Chip>
          </Row>
          <Row label="Дни недели">
            <DayTabs />
          </Row>
        </ComponentCard>
      </div>

      {/* ───── CARDS ───── */}
      <div style={{ marginBottom: 48 }}>
        <ComponentCard title="Cards" sub="Карточка класса — сердце приложения. Стат-карточка — для дашборда.">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            <ClassCard
              time="07:00"
              duration="50 MIN"
              name="HIIT Strength"
              coach="Alex K."
              spots={3}
              tag="Signature"
              hot
            />
            <ClassCard
              time="09:30"
              duration="50 MIN"
              name="Box Conditioning"
              coach="Marina V."
              spots={8}
            />
            <ClassCard
              time="18:00"
              duration="50 MIN"
              name="Cycle 50"
              coach="Daniel R."
              spots={0}
              full
            />
          </div>
          <div style={{ marginTop: 16, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            <StatCard label="Classes this month" value="14" delta="+3" />
            <StatCard label="Calories" value="11,420" delta="+8%" />
            <StatCard label="Streak" value="9" unit="days" hot />
            <StatCard label="Next class" value="07:00" unit="Tomorrow" dark />
          </div>
        </ComponentCard>
      </div>

      {/* ───── NAVIGATION ───── */}
      <div>
        <ComponentCard title="Navigation" sub="Тёмный таб-бар для мобильного, графитовый топ-бар для веба — бренд всегда сидит на своей тёмной поверхности.">
          <Row label="Мобильный таб-бар">
            <MobileTabBar />
          </Row>
          <Row label="Топ-бар на сайте">
            <WebTopBar />
          </Row>
        </ComponentCard>
      </div>
    </Section>
  );
}

/* ============================================================
   Layout helpers
   ============================================================ */
function ComponentCard({ title, sub, children }) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--r-lg)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "20px 28px",
          borderBottom: "1px solid var(--divider)",
          background: "var(--bg-sunken)",
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <div>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, margin: 0, color: "var(--text-primary)", letterSpacing: "-0.01em" }}>{title}</h3>
        </div>
        <p style={{ fontSize: 13, color: "var(--text-secondary)", margin: 0, textAlign: "right", maxWidth: 480 }}>{sub}</p>
      </div>
      <div style={{ padding: 28 }}>{children}</div>
    </div>
  );
}

function Row({ label, children }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", alignItems: "center", gap: 24, padding: "12px 0", borderBottom: "1px dashed var(--border-subtle)" }}>
      <span className="eyebrow" style={{ color: "var(--text-tertiary)" }}>{label}</span>
      <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>{children}</div>
    </div>
  );
}

/* ============================================================
   DayTabs (week strip)
   ============================================================ */
function DayTabs() {
  const [sel, setSel] = useStateC(2);
  const days = ["MON 26", "TUE 27", "WED 28", "THU 29", "FRI 30", "SAT 31", "SUN 01"];
  return (
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
      {days.map((d, i) => (
        <button
          key={d}
          onClick={() => setSel(i)}
          style={{
            all: "unset",
            cursor: "pointer",
            padding: "10px 14px",
            borderRadius: "var(--r-sm)",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.08em",
            background: sel === i ? "var(--ink-900)" : "var(--surface)",
            color: sel === i ? "var(--brand-yellow)" : "var(--text-primary)",
            border: `1px solid ${sel === i ? "var(--ink-900)" : "var(--border)"}`,
            transition: "all var(--t-fast) var(--ease-out)",
          }}
        >
          {d}
        </button>
      ))}
    </div>
  );
}

/* ============================================================
   ClassCard — signature card design
   ============================================================ */
function ClassCard({ time, duration, name, coach, spots, tag, hot, full }) {
  return (
    <div
      style={{
        background: full ? "var(--bg-sunken)" : "var(--surface)",
        border: `1px solid ${hot ? "var(--brand-yellow)" : "var(--border)"}`,
        borderRadius: "var(--r-lg)",
        overflow: "hidden",
        position: "relative",
        opacity: full ? 0.65 : 1,
      }}
    >
      {tag && (
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            background: "var(--brand-yellow)",
            color: "var(--ink-900)",
            padding: "4px 8px",
            borderRadius: "var(--r-xs)",
          }}
        >
          {tag}
        </div>
      )}
      <div style={{ padding: "20px 20px 16px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
          <span
            className="display-italic"
            style={{ fontSize: 40, color: "var(--text-primary)", lineHeight: 1 }}
          >
            {time}
          </span>
          <span className="eyebrow" style={{ color: "var(--text-tertiary)" }}>{duration}</span>
        </div>
        <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 18, margin: "8px 0 4px", color: "var(--text-primary)", letterSpacing: "-0.01em" }}>{name}</h4>
        <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>With {coach}</div>
      </div>
      <div
        style={{
          padding: "12px 20px",
          background: full ? "transparent" : "var(--bg-sunken)",
          borderTop: "1px solid var(--divider)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontSize: 12, color: full ? "var(--error)" : spots <= 3 ? "var(--warning)" : "var(--text-secondary)", fontWeight: 600 }}>
          {full ? "Waitlist only" : `${spots} spots left`}
        </span>
        <S50Button variant={full ? "secondary" : "primary"} size="sm">
          {full ? "Join waitlist" : "Book"}
        </S50Button>
      </div>
    </div>
  );
}

/* ============================================================
   StatCard
   ============================================================ */
function StatCard({ label, value, delta, unit, hot, dark }) {
  return (
    <div
      style={{
        padding: "20px 20px 18px",
        background: dark ? "var(--ink-900)" : "var(--surface)",
        color: dark ? "var(--ink-0)" : "var(--text-primary)",
        border: `1px solid ${dark ? "var(--ink-900)" : "var(--border)"}`,
        borderRadius: "var(--r-lg)",
        position: "relative",
      }}
    >
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: dark ? "var(--ink-400)" : "var(--text-secondary)", marginBottom: 12 }}>
        {label}
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
        <span className="display-italic" style={{ fontSize: 40, lineHeight: 1, color: dark ? "var(--brand-yellow)" : "var(--text-primary)" }}>
          {value}
        </span>
        {unit && <span style={{ fontSize: 12, color: dark ? "var(--ink-300)" : "var(--text-secondary)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{unit}</span>}
      </div>
      {delta && (
        <div style={{ marginTop: 6, fontSize: 12, fontWeight: 700, color: hot ? "var(--brand-yellow)" : "var(--success)" }}>
          {hot && "🔥 "}{delta}
        </div>
      )}
    </div>
  );
}

/* ============================================================
   Mobile Tab Bar
   ============================================================ */
function MobileTabBar() {
  const [sel, setSel] = useStateC(0);
  const tabs = [
    { n: "home", l: "Home" },
    { n: "calendar", l: "Book" },
    { n: "bolt", l: "Train" },
    { n: "user", l: "Me" },
  ];
  return (
    <div
      style={{
        width: 380,
        background: "var(--ink-900)",
        borderRadius: "var(--r-2xl)",
        padding: "10px 12px 14px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      {tabs.map((t, i) => {
        const active = sel === i;
        return (
          <button
            key={t.n}
            onClick={() => setSel(i)}
            style={{
              all: "unset",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              padding: "8px 16px",
              borderRadius: "var(--r-md)",
              color: active ? "var(--brand-yellow)" : "var(--ink-400)",
              background: active ? "rgba(255,229,0,.08)" : "transparent",
            }}
          >
            <Icon name={t.n} size={22} />
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>{t.l}</span>
          </button>
        );
      })}
    </div>
  );
}

/* ============================================================
   Web Top Bar
   ============================================================ */
function WebTopBar() {
  return (
    <div
      style={{
        width: "100%",
        background: "var(--brand-graphite)",
        border: "1px solid var(--brand-graphite)",
        borderRadius: "var(--r-md)",
        padding: "14px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <S50Logo height={22} />
        <nav style={{ display: "flex", gap: 24 }}>
          {["Schedule", "Studios", "Membership", "Coaches", "Shop"].map((n, i) => (
            <a
              key={n}
              style={{
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 600,
                color: i === 0 ? "var(--ink-0)" : "var(--ink-300)",
                position: "relative",
                paddingBottom: 2,
                borderBottom: i === 0 ? "2px solid var(--brand-yellow)" : "2px solid transparent",
              }}
            >
              {n}
            </a>
          ))}
        </nav>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <button
          style={{
            all: "unset",
            cursor: "pointer",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--ink-300)",
            padding: "8px 14px",
          }}
        >
          Sign in
        </button>
        <S50Button variant="primary" size="sm">Book a class</S50Button>
      </div>
    </div>
  );
}

/* ============================================================
   ICONOGRAPHY SECTION
   ============================================================ */
function IconographySection() {
  const icons = [
    "home", "calendar", "bolt", "user", "bell", "search", "plus", "arrow",
    "chevron", "clock", "flame", "heart", "check", "play", "settings", "location",
    "grid", "pin", "qr",
  ];
  return (
    <Section
      id="iconography"
      eyebrow="06 · Icons"
      title="Iconography"
      lede="Линейные иконки. Толщина обводки 1.75 px, квадратные торцы, без скруглений углов — наследуют ту же индустриальную геометрию, что и логотип. Базовый размер 24×24 px, выровнены по пиксельной сетке."
    >
      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "var(--r-lg)",
          padding: 32,
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 8 }}>
          {icons.map((n) => (
            <div
              key={n}
              style={{
                aspectRatio: "1 / 1",
                background: "var(--bg-sunken)",
                borderRadius: "var(--r-sm)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                color: "var(--text-primary)",
              }}
            >
              <Icon name={n} size={26} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-tertiary)" }}>{n}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Size grid */}
      <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
        {[16, 20, 24, 32].map((s) => (
          <div
            key={s}
            style={{
              padding: 24,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--r-md)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            <Icon name="bolt" size={s} />
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-primary)", fontWeight: 700 }}>{s}px</div>
              <div style={{ fontSize: 11, color: "var(--text-tertiary)" }}>
                {s === 16 ? "Внутри текста" : s === 20 ? "В кнопке" : s === 24 ? "По умолчанию" : "Крупный"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

Object.assign(window, { ComponentsSection, IconographySection, ClassCard, StatCard, MobileTabBar });
