import type { FC } from "react";
import { useLocation } from "react-router-dom";
import { NavItem } from "./NavItem";

const NavLinks: FC<{ className?: string }> = ({ className }) => {
  const { pathname } = useLocation();

  const homeIsActive = pathname === "/" ? true : false;
  const shopIsActive = pathname === "/shop" ? true : false;
  const aboutIsActive = pathname === "/about" ? true : false;

  return (
    <>
      <NavItem
        className={className}
        isActive={homeIsActive}
        to="/"
        text="Home"
      />
      <NavItem
        className={className}
        isActive={shopIsActive}
        to="/shop"
        text="Shop"
      />
      <NavItem
        className={className}
        isActive={aboutIsActive}
        to="/about"
        text="About"
      />
    </>
  );
};

export { NavLinks };
