import React from "react";


function SectionTitle({ eyebrow, title, subtitle, align = "left" }) {
  return (
    <div className={`section-title section-title-${align}`}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
