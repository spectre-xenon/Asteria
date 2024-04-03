import type { FC } from "react";

const Spacer: FC<{ className?: string }> = ({ className }) => (
  <div className={`p-2 ${className}`}></div>
);

export { Spacer };
