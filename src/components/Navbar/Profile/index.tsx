import type { FC } from "react";

const Profile: FC = () => {
  return (
    <div
      className={`rounded-full border-2 bg-[url("/profilePic.jpg")] bg-cover bg-center p-6`}
    ></div>
  );
};

export { Profile };
