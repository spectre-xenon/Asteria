import { useFetch } from "@/hooks";
import { item } from "@/types";
import { FC } from "react";

type Props = {
  id: number;
  amount: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
  handleRemove: () => void;
};

const CartItem: FC<Props> = ({
  id,
  amount,
  handleIncrement,
  handleDecrement,
  handleRemove,
}) => {
  const { data, error, isLoading } = useFetch<item>(`/api/shop/${id}`);
  const sharedClasses = "bg-lighterGery px-3 py-1 text-black";

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{`${error}`}</h1>;

  return (
    <div className="flex h-24 gap-3 text-lg">
      <img
        className="h-full w-24 rounded-lg object-cover"
        src={data?.full}
        alt={data?.name}
      />

      <div className="flex flex-col justify-between py-2">
        <p className="text-black">{data?.name}</p>
        <div className="flex">
          {amount > 1 ? (
            <button
              className={`${sharedClasses} rounded-bl-lg rounded-tl-lg border-b-2 border-l-2 border-t-2`}
              onClick={handleDecrement}
            >
              -
            </button>
          ) : (
            <button
              className={`${sharedClasses} rounded-bl-lg rounded-tl-lg border-b-2 border-l-2 border-t-2 px-[0.380rem]`}
              onClick={handleRemove}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <mask
                  id="mask0_159_92"
                  className="mask-type:alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="18"
                  height="18"
                >
                  <rect width="18" height="18" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_159_92)">
                  <path
                    d="M4.89375 15.75C4.58125 15.75 4.31562 15.6406 4.09687 15.4219C3.87812 15.2031 3.76875 14.9375 3.76875 14.625V3.9375H3.5625C3.4 3.9375 3.26563 3.88438 3.15938 3.77813C3.05313 3.67188 3 3.5375 3 3.375C3 3.2125 3.05313 3.07813 3.15938 2.97188C3.26563 2.86563 3.4 2.8125 3.5625 2.8125H6.525C6.525 2.65 6.57812 2.51563 6.68437 2.40938C6.79062 2.30313 6.925 2.25 7.0875 2.25H10.9125C11.075 2.25 11.2094 2.30313 11.3156 2.40938C11.4219 2.51563 11.475 2.65 11.475 2.8125H14.4375C14.6 2.8125 14.7344 2.86563 14.8406 2.97188C14.9469 3.07813 15 3.2125 15 3.375C15 3.5375 14.9469 3.67188 14.8406 3.77813C14.7344 3.88438 14.6 3.9375 14.4375 3.9375H14.2313V14.625C14.2313 14.9375 14.1219 15.2031 13.9031 15.4219C13.6844 15.6406 13.4188 15.75 13.1063 15.75H4.89375ZM9 10.125L10.8 11.9438C10.925 12.0688 11.075 12.1344 11.25 12.1406C11.425 12.1469 11.575 12.0813 11.7 11.9438C11.825 11.8188 11.8875 11.6719 11.8875 11.5031C11.8875 11.3344 11.825 11.1875 11.7 11.0625L9.9 9.225L11.7 7.3875C11.825 7.2625 11.8875 7.11563 11.8875 6.94688C11.8875 6.77813 11.825 6.63125 11.7 6.50625C11.575 6.38125 11.425 6.31875 11.25 6.31875C11.075 6.31875 10.925 6.38125 10.8 6.50625L9 8.325L7.21875 6.50625C7.09375 6.38125 6.94375 6.31875 6.76875 6.31875C6.59375 6.31875 6.44375 6.38125 6.31875 6.50625C6.19375 6.63125 6.13125 6.78125 6.13125 6.95625C6.13125 7.13125 6.19375 7.28125 6.31875 7.40625L8.11875 9.225L6.31875 11.0438C6.19375 11.1688 6.13125 11.3187 6.13125 11.4937C6.13125 11.6687 6.19375 11.8188 6.31875 11.9438C6.44375 12.0688 6.59375 12.1313 6.76875 12.1313C6.94375 12.1313 7.09375 12.0688 7.21875 11.9438L9 10.125Z"
                    fill="black"
                  />
                </g>
              </svg>
            </button>
          )}
          <p className={`${sharedClasses} `}>{amount}</p>
          <button
            className={`${sharedClasses} rounded-br-lg rounded-tr-lg border-b-2 border-r-2 border-t-2`}
            onClick={handleIncrement}
          >
            +
          </button>
          <p className="ml-2 self-end text-grey">x {data?.price} Zing</p>
        </div>
      </div>
    </div>
  );
};

export { CartItem };
