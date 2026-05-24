/* global React */
const { useState, useEffect, useRef } = React;

/* ============================================================
   STUDIO 50 — LOGO MARK (SVG, scalable)
   ============================================================ */
function S50Logo({ height = 32, plated = false, mode }) {
  // The official lockup is YELLOW "STUDIO" + WHITE "50".
  // Brand rule: the logo NEVER sits on a white background — yellow on white
  // fails AA contrast. Either keep the surface graphite, or pass plated=true
  // to get an automatic graphite pill around the mark.
  // `mode` is accepted for backwards compatibility; "light" forces a plate.
  const needsPlate = plated || mode === "light";
  const img = (
    <img
      src={window.__asset("assets/STUDIO50.svg")}
      alt="STUDIO 50"
      style={{ height, width: "auto", display: "block", userSelect: "none" }}
      draggable={false}
    />
  );
  if (!needsPlate) return img;
  const pad = Math.round(height * 0.55);
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        background: "var(--brand-graphite)",
        borderRadius: "var(--r-md)",
        padding: `${Math.round(height * 0.45)}px ${pad}px`,
      }}
    >
      {img}
    </span>
  );
}

/* ============================================================
   PAGE / SECTION
   ============================================================ */
function Section({ id, eyebrow, title, lede, children, dense, bg }) {
  return (
    <section
      id={id}
      style={{
        padding: dense ? "56px 0 48px" : "96px 0 80px",
        borderTop: "1px solid var(--divider)",
        background: bg || "transparent",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(220px, 280px) 1fr",
            gap: 64,
            marginBottom: 48,
            alignItems: "start",
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 12 }}>
              {eyebrow}
            </div>
            <h2
              className="display"
              style={{
                fontSize: 40,
                lineHeight: 1.02,
                margin: 0,
                color: "var(--text-primary)",
              }}
            >
              {title}
            </h2>
          </div>
          {lede && (
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.55,
                color: "var(--text-secondary)",
                margin: 0,
                maxWidth: 640,
                paddingTop: 8,
              }}
            >
              {lede}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

/* ============================================================
   COLOR SWATCH
   ============================================================ */
function Swatch({ name, token, hex, role, big, dark }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <button
      onClick={copy}
      style={{
        all: "unset",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        gap: 0,
        border: "1px solid var(--border)",
        borderRadius: "var(--r-lg)",
        overflow: "hidden",
        background: "var(--surface)",
        transition: "transform var(--t-fast) var(--ease-out)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <div
        style={{
          background: hex,
          height: big ? 120 : 80,
          width: "100%",
          position: "relative",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {copied && (
          <span
            style={{
              position: "absolute",
              top: 8,
              right: 8,
              fontSize: 11,
              padding: "4px 8px",
              borderRadius: "var(--r-pill)",
              background: "var(--ink-900)",
              color: "var(--ink-0)",
              fontWeight: 600,
            }}
          >
            COPIED
          </span>
        )}
      </div>
      <div style={{ padding: "12px 14px" }}>
        <div
          style={{
            fontWeight: 700,
            fontSize: 13,
            color: "var(--text-primary)",
            marginBottom: 2,
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "var(--text-secondary)",
            marginBottom: 4,
          }}
        >
          {hex.toUpperCase()}
        </div>
        {token && (
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "var(--text-tertiary)",
            }}
          >
            {token}
          </div>
        )}
        {role && (
          <div
            style={{
              fontSize: 11,
              color: "var(--text-secondary)",
              marginTop: 6,
              lineHeight: 1.4,
            }}
          >
            {role}
          </div>
        )}
      </div>
    </button>
  );
}

/* ============================================================
   BUTTON COMPONENT (live)
   ============================================================ */
function S50Button({ variant = "primary", size = "md", children, icon, iconRight, full, disabled, onClick }) {
  const isHeavy = variant === "primary" || variant === "dark" || variant === "danger";
  const base = {
    all: "unset",
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: "var(--font-text)",
    // Heavy variants get 900 weight to match the brand's punchy display feel.
    // Neutral variants stay 600 — visually quieter, won't compete with primary CTAs.
    fontWeight: isHeavy ? 900 : 600,
    letterSpacing: "-0.005em",
    borderRadius: "var(--r-pill)",
    transition: "all var(--t-fast) var(--ease-out)",
    whiteSpace: "nowrap",
    width: full ? "100%" : "auto",
    boxSizing: "border-box",
    textTransform: isHeavy ? "uppercase" : "none",
    opacity: disabled ? 0.4 : 1,
  };
  // Tighter tracking than before — references like LADDER use ~0.02em on uppercase
  // CTA. Keeps the word stocky and tappable instead of stretched out.
  const sizes = {
    sm: { fontSize: 12, padding: "8px 16px", height: 32, letterSpacing: isHeavy ? "0.02em" : "-0.005em" },
    md: { fontSize: 13, padding: "0 22px", height: 42, letterSpacing: isHeavy ? "0.03em" : "-0.005em" },
    lg: { fontSize: 14, padding: "0 28px", height: 50, letterSpacing: isHeavy ? "0.035em" : "-0.005em" },
    xl: { fontSize: 16, padding: "0 36px", height: 58, letterSpacing: isHeavy ? "0.04em" : "-0.005em" },
  };
  const variants = {
    primary: {
      background: "var(--brand-yellow)",
      color: "var(--ink-900)",
    },
    dark: {
      background: "var(--ink-900)",
      color: "var(--ink-0)",
    },
    secondary: {
      background: "transparent",
      color: "var(--text-primary)",
      boxShadow: "inset 0 0 0 1.5px var(--border-strong)",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-primary)",
    },
    danger: {
      background: "var(--error)",
      color: "#fff",
    },
  };
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{ ...base, ...sizes[size], ...variants[variant] }}
      onMouseEnter={(e) => {
        if (disabled) return;
        if (variant === "primary") e.currentTarget.style.background = "var(--brand-yellow-hover)";
        if (variant === "dark") e.currentTarget.style.background = "var(--ink-700)";
        if (variant === "secondary") e.currentTarget.style.background = "var(--surface-hover)";
        if (variant === "ghost") e.currentTarget.style.background = "var(--surface-hover)";
      }}
      onMouseLeave={(e) => {
        if (disabled) return;
        e.currentTarget.style.background = variants[variant].background;
      }}
    >
      {icon}
      <span>{children}</span>
      {iconRight}
    </button>
  );
}

/* ============================================================
   CHIP
   ============================================================ */
function Chip({ children, variant = "default", icon, active, onClick }) {
  const styles = {
    default: { background: "var(--surface-muted)", color: "var(--text-primary)", border: "1px solid var(--border-subtle)" },
    active:  { background: "var(--ink-900)", color: "var(--ink-0)", border: "1px solid var(--ink-900)" },
    yellow:  { background: "var(--brand-yellow)", color: "var(--ink-900)", border: "1px solid var(--brand-yellow)" },
    outline: { background: "transparent", color: "var(--text-primary)", border: "1px solid var(--border-strong)" },
    success: { background: "var(--success-soft)", color: "#0E6B47", border: "1px solid transparent" },
    warning: { background: "var(--warning-soft)", color: "#8B5400", border: "1px solid transparent" },
    error:   { background: "var(--error-soft)", color: "#A02929", border: "1px solid transparent" },
  };
  const v = active ? styles.active : styles[variant];
  return (
    <button
      onClick={onClick}
      style={{
        all: "unset",
        cursor: onClick ? "pointer" : "default",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 12,
        fontWeight: 600,
        padding: "6px 12px",
        borderRadius: "var(--r-pill)",
        transition: "all var(--t-fast) var(--ease-out)",
        ...v,
      }}
    >
      {icon}
      {children}
    </button>
  );
}

/* ============================================================
   INPUT
   ============================================================ */
function S50Input({ label, placeholder, value, error, hint, icon, type = "text", forceFocused }) {
  const [v, setV] = useState(value || "");
  const [focused, setFocused] = useState(false);
  const isFocused = forceFocused || focused;
  return (
    <label style={{ display: "block" }}>
      {label && (
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "var(--text-secondary)",
            marginBottom: 6,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
          }}
        >
          {label}
        </div>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "0 16px",
          height: 44,
          background: "var(--surface)",
          border: `1.5px solid ${error ? "var(--error)" : isFocused ? "var(--ink-900)" : "var(--border)"}`,
          borderRadius: "var(--r-pill)",
          boxShadow: isFocused && !error ? "0 0 0 3px rgba(255,229,0,.35)" : "none",
          transition: "all var(--t-fast) var(--ease-out)",
        }}
      >
        {icon && <span style={{ color: isFocused ? "var(--ink-900)" : "var(--text-tertiary)", display: "inline-flex" }}>{icon}</span>}
        <input
          type={type}
          value={v}
          placeholder={placeholder}
          onChange={(e) => setV(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            all: "unset",
            flex: 1,
            fontSize: 14,
            color: "var(--text-primary)",
          }}
        />
      </div>
      {(hint || error) && (
        <div
          style={{
            fontSize: 12,
            color: error ? "var(--error)" : "var(--text-tertiary)",
            marginTop: 6,
          }}
        >
          {error || hint}
        </div>
      )}
    </label>
  );
}

/* ============================================================
   SWITCH
   ============================================================ */
function Switch({ on, onChange }) {
  return (
    <button
      onClick={() => onChange && onChange(!on)}
      style={{
        all: "unset",
        cursor: "pointer",
        width: 44,
        height: 26,
        borderRadius: 999,
        background: on ? "var(--ink-900)" : "var(--ink-200)",
        position: "relative",
        transition: "background var(--t-fast) var(--ease-out)",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 3,
          left: on ? 21 : 3,
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: on ? "var(--brand-yellow)" : "var(--ink-0)",
          boxShadow: "0 1px 3px rgba(0,0,0,.2)",
          transition: "left var(--t-med) var(--ease-spring)",
        }}
      />
    </button>
  );
}

/* ============================================================
   ICON SET (line, 1.75 stroke, square caps)
   ============================================================ */
function Icon({ name, size = 20, color = "currentColor" }) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: 1.75,
    strokeLinecap: "square",
    strokeLinejoin: "miter",
  };
  const map = {
    home:    <><path d="M3 11 12 4l9 7" /><path d="M5 10v10h14V10" /></>,
    calendar:<><rect x="3.5" y="5" width="17" height="15" /><path d="M3.5 10h17" /><path d="M8 3v4M16 3v4" /></>,
    bolt:    <><path d="M13 3 5 14h6l-1 7 8-11h-6l1-7Z" /></>,
    user:    <><circle cx="12" cy="8" r="4" /><path d="M4 21c1-4 4-6 8-6s7 2 8 6" /></>,
    bell:    <><path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15L6 16Z" /><path d="M10 20a2 2 0 0 0 4 0" /></>,
    search:  <><circle cx="11" cy="11" r="6" /><path d="m20 20-4.5-4.5" /></>,
    plus:    <><path d="M12 5v14M5 12h14" /></>,
    arrow:   <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    chevron: <><path d="m9 6 6 6-6 6" /></>,
    clock:   <><circle cx="12" cy="12" r="8" /><path d="M12 7v5l3 2" /></>,
    flame:   <><path d="M12 3c1 4 6 5 6 11a6 6 0 1 1-12 0c0-3 2-4 3-6 1 2 3 3 3-5Z" /></>,
    heart:   <><path d="M12 20s-7-4-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 6-7 10-7 10Z" /></>,
    check:   <><path d="m5 12 5 5 9-11" /></>,
    play:    <><path d="M7 4v16l13-8L7 4Z" /></>,
    settings:<><circle cx="12" cy="12" r="3" /><path d="M19 12a7 7 0 0 0-.2-1.6l2-1.5-2-3.4-2.3.9a7 7 0 0 0-2.8-1.6L13 2h-2l-.7 2.8a7 7 0 0 0-2.8 1.6l-2.3-.9-2 3.4 2 1.5A7 7 0 0 0 5 12c0 .6.1 1.1.2 1.6l-2 1.5 2 3.4 2.3-.9a7 7 0 0 0 2.8 1.6L11 22h2l.7-2.8a7 7 0 0 0 2.8-1.6l2.3.9 2-3.4-2-1.5c.1-.5.2-1 .2-1.6Z" /></>,
    location:<><path d="M12 21s-7-7-7-12a7 7 0 0 1 14 0c0 5-7 12-7 12Z" /><circle cx="12" cy="9" r="2.5" /></>,
    grid:    <><rect x="4" y="4" width="7" height="7" /><rect x="13" y="4" width="7" height="7" /><rect x="4" y="13" width="7" height="7" /><rect x="13" y="13" width="7" height="7" /></>,
    pin:     <><path d="M12 21V12" /><circle cx="12" cy="8" r="4" /></>,
    qr:      <><rect x="4" y="4" width="6" height="6" /><rect x="14" y="4" width="6" height="6" /><rect x="4" y="14" width="6" height="6" /><path d="M14 14h2v2h-2zM18 14h2v2h-2zM14 18h2v2h-2zM18 18h2v2h-2z" /></>,
  };
  return <svg {...props}>{map[name]}</svg>;
}

/* ============================================================
   EXPORT TO WINDOW
   ============================================================ */
Object.assign(window, {
  S50Logo, Section, Swatch, S50Button, Chip, S50Input, Switch, Icon
});
