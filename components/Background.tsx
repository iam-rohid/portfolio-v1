import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "../config/particlesConfig";
import { useTheme } from "../hooks/useTheme";

const Background = () => {
  const { isDark } = useTheme();
  if (isDark === null) return null;
  return (
    <Particles
      className="fixed inset-0"
      style={{ zIndex: -100 }}
      options={particlesConfig({ particlesColor: isDark ? "#fff" : "#000" })}
    ></Particles>
  );
};

export default Background;
