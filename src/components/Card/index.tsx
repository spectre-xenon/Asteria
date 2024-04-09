import type { FC } from "react";
import { Link } from "react-router-dom";

const Card: FC<{
  id: number;
  price: number;
  name: string;
  imageSrc: string;
  categorys: string[];
  handleClick: () => void;
}> = ({ id, name, price, imageSrc, categorys, handleClick }) => {
  const to = `/shop/${id}`;
  return (
    <div className="h-[650px] w-full md:h-[580px] md:w-[250px] ">
      <Link to={to}>
        <img
          className="h-[85%] w-full rounded-t-lg object-cover"
          src={imageSrc}
        />
      </Link>
      <div className="bg-card flex h-[15%] w-full rounded-b-lg pl-2 pt-2">
        <div className="flex h-full flex-1 flex-col items-start gap-1 ">
          {categorys.map((category) => (
            <p className="text-sm text-grey">{category}</p>
          ))}
          <Link to={to}>
            <p className="mt-auto pb-2 text-2xl leading-6 md:text-xl">{name}</p>
          </Link>
        </div>
        <div className="flex h-full flex-1 flex-col items-end justify-between">
          <p className="pr-2 text-grey">
            <span className="text-accent">{`${price}`}</span> Zing
          </p>
          <button
            className="rounded-br-lg rounded-tl-lg bg-white p-3 transition-transform ease-in-out hover:scale-125 md:p-2"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 11 10"
              fill="none"
            >
              <path
                d="M4.79545 10.0057V0.630681H6.38636V10.0057H4.79545ZM0.903409 6.11364V4.52273H10.2784V6.11364H0.903409Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export { Card };
