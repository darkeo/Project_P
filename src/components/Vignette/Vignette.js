import React, { useState } from "react";
import VignetteCSS from "./Vignette.module.css";

function Vignette({ src, alt, size, link, tab }) {
  // state
  const [hovered, setHovered] = useState(false);

  //comportements

  //affichage (render)
  return (
    <a href={link} target={tab} className={VignetteCSS.vignette}>
      <img
        className={VignetteCSS.imageContainer}
        src={src}
        alt={alt}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          filter: hovered ? "brightness(80%)" : "brightness(100%)",
          width: `${size}px`,
          height: "auto"
        }}
      />
    </a>
  );
}

export default Vignette;
