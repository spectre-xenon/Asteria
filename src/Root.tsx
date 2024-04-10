import { Outlet } from "react-router-dom";
import { NavBar } from "@/components";
import type { FC } from "react";
import "./index.css";

const Root: FC = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export { Root };
