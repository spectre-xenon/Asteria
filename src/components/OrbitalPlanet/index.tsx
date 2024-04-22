import Spline from "@splinetool/react-spline";
import type { FC } from "react";

const OrbitalPlanet: FC<{ className: string }> = ({ className }) => {
  return (
    <Spline
      className={className}
      scene="https://prod.spline.design/7e2e54qNzPCGj7cT/scene.splinecode"
    />
  );
};

export { OrbitalPlanet };
