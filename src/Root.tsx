import { Outlet } from "react-router-dom";
import { NavBar } from "@/components";
import type { FC } from "react";
import "./index.css";

const Root: FC = () => {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Outlet />
    </div>
  );
};

export { Root };
