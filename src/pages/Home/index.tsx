import { Link } from "react-router-dom";
import pulsarUrl from "@/public/pulsar.png";
import starBg from "@/public/starBg.png";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
            <img
                src={starBg}
                alt="stars background"
                className="absolute inset-0 h-full w-full object-cover z-0"
            />

            <div className="flex flex-col justify-center items-center md:items-start px-6 md:px-10 py-10 md:py-0 relative z-10 w-full md:w-auto">
                <h1 className="text-4xl md:text-6xl text-center md:text-left text-white font-bold tracking-wide md:leading-tight md:tracking-wider mb-6">
                    <p>FORGED
                        WITH</p>
                    <p className='text-3xl md:text-5xl'>STAR
                        FIRE</p>
                </h1>
                <p className="text-grey text-center md:text-left mb-8 md:w-1/2 xl:md-full">
                    love, care, myass and a sprinkle of nova dew! Crushed in the black hole
                    forgery to fine grains like nothing before! One sip is enough to
                    ignite your flames again.
                </p>
                <div className="flex flex-col md:flex-row items-center gap-4">
                    <a href="/shop" className="text-center md:text-left">
                        <button className="rounded-full bg-white text-black px-6 py-3 transition-transform ease-in-out">
                            Shop now ➜
                        </button>
                    </a>
                    <a href="/about" className="text-center md:text-left">
                        <button className="rounded-full border-2 text-white px-6 py-3 transition-transform ease-in-out">
                            About us ➜
                        </button>
                    </a>
                </div>
            </div>

            <img
                className="hidden md:block absolute bottom-0 right-0 mb-10 mr-10 w-1/2 object-fill animate-pulse-slow"
                src={pulsarUrl}
                alt="Pulsar star"
            />
        </div>
  );
};

export { Home };
