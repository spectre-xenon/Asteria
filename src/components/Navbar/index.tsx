import { Logo } from "./logo";
import { Cart } from "@/components";
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
  const leftPos = pathname === "/shop" ? "left-[79%]" : "left-auto";

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const position = isOpen ? "translate-y-44" : "-translate-y-44";

  return (
    <nav
      className={`${width} relative flex items-center  justify-end px-4 py-2 transition-all  md:px-10`}
    >
      <div className="absolute z-[12] h-full w-28 -translate-y-4 translate-x-5 rounded-full bg-black md:hidden"></div>
      <Logo />
      {/* Navigation section start */}
      <div
        className={`absolute ${leftPos} rotate- z-[11] flex flex-col-reverse items-center gap-8 transition-all duration-300 ease-out-cubic md:static md:top-0 md:flex md:translate-y-0 md:flex-row ${position}`}
      >
        <VectorStrip className="tra top-[5rem] z-[-1] md:left-10 md:top-auto" />
        <NavLinks className="z-[11]" />
        <Profile />
      </div>
      {/* Navigation section end */}
      <Spacer className="order-3" />
      <Cart className="order-2 md:order-last" haveItems={true} />
      <Menu className="relative z-[12] order-last" handleClick={handleClick} />
    </nav>
  );
};

export { NavBar };
