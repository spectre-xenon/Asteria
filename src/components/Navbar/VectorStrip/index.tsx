import type { FC } from "react";

const VectorStrip: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={`absolute rotate-90 pl-1 md:rotate-0 ${className}`}
      width="283"
      height="11"
      viewBox="0 0 283 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="283" height="11" fill="white" />
    </svg>
  );
};

export { VectorStrip };
