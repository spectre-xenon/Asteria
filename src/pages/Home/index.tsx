import { Link } from "react-router-dom";
import starBg from "@/assets/starBg.png";
import { OrbitalPlanet } from "@/components";

const Home = () => {
  return (
    <div className="flex h-[80vh] w-screen items-center justify-center gap-2 overflow-hidden pl-10 md:h-[89vh]">
      <img
        src={starBg}
        alt="stars background"
        className="absolute left-0 top-0 -z-[1] h-screen w-screen object-cover"
      />

      <div className="flex flex-1 flex-col gap-8 pl-[rem] ">
        <h1 className="text-6xl leading-[5rem] tracking-[0.5rem] md:text-8xl md:leading-[7rem] md:tracking-[1rem]">
          FORGED <br />
          WITH <br />
          <span className="text-accent">STAR</span> <br />
          FIRE
        </h1>
        <p className="text-grey">
          love, care, and a sprinkle of nova dew! Crushed in the black hole
          forgery to fine grains like nothing before! One sip is enough to
          ignite your flames again.
        </p>
        <div className="flex items-center gap-10">
          <Link to="/shop">
            <button className="rounded-full bg-white px-4 py-2 text-black transition-transform ease-in-out hover:scale-105">
              Shop now ➜
            </button>
          </Link>
          <Link to="/about">
            <button className="rounded-full border-2 px-4 py-2 text-white transition-transform ease-in-out hover:scale-105">
              About us ➜
            </button>
          </Link>
        </div>
      </div>
      <OrbitalPlanet className="hidden flex-[1.5] md:block" />
      {/* <img
        className="hidden w-1/2 object-fill motion-safe:animate-pulse-slow md:block"
        src={pulsarUrl}
        alt="Pulsar star"
      /> */}
    </div>
  );
};

export { Home };
