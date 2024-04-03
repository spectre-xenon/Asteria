import type { FC } from "react";
import { Link } from "react-router-dom";

const NavItem: FC<{
  isActive: boolean;
  to: string;
  text: string;
  className?: string;
}> = ({ isActive, text, to, className }) => {
  const conditionalStyles = isActive
    ? "border-2 border-white bg-black  text-white"
    : "bg-white text-black";

  return (
    <Link to={to}>
      <div
        className={`rounded-full px-4 py-2 text-[14px] transition-all ease-in-out hover:scale-105 ${conditionalStyles} ${className}`}
      >
        {text}
      </div>
    </Link>
  );
};

export { NavItem };
