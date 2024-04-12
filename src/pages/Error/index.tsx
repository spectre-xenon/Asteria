import { FC } from "react";
import { Link } from "react-router-dom";

const Error: FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-7">
      <h1 className="text-4xl  md:text-7xl">404: NOT FOUND</h1>
      <Link
        to="/"
        className="rounded-full bg-white px-4 py-1 text-black transition-transform ease-in-out hover:scale-105"
      >
        Home ➜
      </Link>
    </div>
  );
};

export { Error };
