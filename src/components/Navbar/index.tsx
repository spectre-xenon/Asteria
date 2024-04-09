import { Logo } from "./logo";
import { Cart } from "./Cart";
import { NavLinks } from "./NavLinks";
import { Profile } from "./Profile";
import { VectorStrip } from "./VectorStrip";
import { Menu } from "./Menu";
import { useState } from "react";
import { Spacer } from "@/components";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const visibilty = isOpen ? "flex" : "hidden";

  return (
    <nav className="flex w-screen items-center justify-end px-4 py-2 md:px-10">
      <Logo />
      {/* Navigation section start */}
      <div
        className={`absolute top-20 z-[11] flex-col-reverse items-center gap-8 md:relative md:top-0 md:flex md:flex-row ${visibilty}`}
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
