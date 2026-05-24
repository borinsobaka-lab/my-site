/* global React */

/* ============================================================
   PHOTO DIVIDER — inset 16:9 brand image between sections.
   ============================================================ */
function PhotoDivider({ id, src, caption }) {
  // If a src is provided we render a locked-in <img> at 16:9, full-bleed
  // across the viewport. No drop-target ceremony — these are baked brand
  // assets, not user uploads.
  if (src) {
    return (
      <section
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 9",
          background: "var(--brand-graphite)",
          overflow: "hidden",
        }}
      >
        <img
          src={window.__asset(src)}
          alt={caption || ""}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        {caption && (
          <div
            style={{
              position: "absolute",
              left: 48,
              bottom: 32,
              pointerEvents: "none",
              mixBlendMode: "difference",
            }}
          >
            <div className="eyebrow" style={{ color: "var(--brand-yellow)" }}>
              {caption.split("·")[0]}
            </div>
          </div>
        )}
      </section>
    );
  }
  // Fallback: editable empty placeholder.
  return (
    <section style={{ padding: "48px 0", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
        <image-slot
          id={id}
          shape="rounded"
          radius="8"
          fit="cover"
          placeholder={caption || "Drop a brand photo here"}
          style={{
            width: "100%",
            aspectRatio: "16 / 9",
            display: "block",
            borderRadius: 8,
          }}
        ></image-slot>
      </div>
    </section>
  );
}

Object.assign(window, { PhotoDivider });
