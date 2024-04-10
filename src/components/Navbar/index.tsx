import { Logo } from "./logo";
import { Cart } from "./Cart";
import { NavLinks } from "./NavLinks";
import { Profile } from "./Profile";
import { VectorStrip } from "./VectorStrip";
import { Menu } from "./Menu";
import { useState } from "react";
import { Spacer } from "@/components";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const width = pathname === "/shop" ? "w-[99.35vw]" : "w-screen";

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const position = isOpen ? "top-20" : "top-[-202px]";

  return (
    <nav
      className={`${width}  flex items-center  justify-end px-4 py-2 transition-all  md:px-10`}
    >
      <Logo />
      {/* Navigation section start */}
      <div
        className={`ease-out-cubic absolute z-[11] flex flex-col-reverse items-center gap-8 transition-all duration-300 md:relative md:top-0 md:flex md:flex-row ${position}`}
      >
        <VectorStrip className="top-[5rem] z-[-1] md:left-10 md:top-auto" />
        <NavLinks className="z-[11]" />
        <Profile />
      </div>
      {/* Navigation section end */}
      <Spacer className="order-3" />
      <Cart className="order-2 md:order-last" haveItems={true} />
      <Menu className="z-[11] order-last" handleClick={handleClick} />
    </nav>
  );
};

export { NavBar };
