"use client";;
import React, { memo } from "react";

export const AuroraText = memo(({
  children,
  className = "",
  colors = ["#FF4D6D", "#7B2CBF", "#3A86FF", "#38BDF8"],
  speed = 1
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animationDuration: `${10 / speed}s`,
  };

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="sr-only">{children}</span>
      <span
        className="relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent"
        style={gradientStyle}
        aria-hidden="true">
        {children}
      </span>
    </span>
  );
});

AuroraText.displayName = "AuroraText";
