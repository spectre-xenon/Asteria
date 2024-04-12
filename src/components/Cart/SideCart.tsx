import { useEffect, useState, type FC } from "react";
import { CartItem } from "./CartItem";
import { cartDataType, cartDispatch } from "@/types";
import { Link } from "react-router-dom";

const SideCart: FC<{
  isOpen: boolean;
  handleClick: () => void;
  cartData: cartDataType;
  cartDispatch: cartDispatch;
}> = ({ isOpen, handleClick, cartData, cartDispatch }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  console.log(subtotal);

  useEffect(() => {
    const fetchSubtotal = async () => {
      const request = await fetch("/api/shop/subtotal", {
        method: "POST",
        body: JSON.stringify(cartData),
      });

      const response: { subtotal: number } = await request.json();
      const { subtotal } = response;

      setSubtotal(subtotal);
      setIsLoading(false);
    };

    fetchSubtotal();
  }, [cartData]);

  const translate = isOpen ? "-translate-x-[100%]" : "translate-x-full";

  return (
    <aside
      className={`${translate} fixed left-full top-0 z-[100] h-screen w-[100%] flex-col bg-cart p-4 transition-transform ease-out-cubic md:w-[30%]`}
    >
      {/* Header & Controls  */}
      <div className="flex flex-col items-center justify-center">
        <svg
          className="h-[1.5rem] w-[1.5rem] cursor-pointer self-end md:h-[1rem] md:w-[1rem]"
          onClick={handleClick}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 13 13"
          fill="none"
        >
          <path
            d="M6.05724 6.6L0.668791 11.9885C0.595707 12.0615 0.504999 12.1013 0.396666 12.1077C0.288332 12.1141 0.198591 12.0776 0.127441 11.9981C0.0415406 11.9186 -0.000934413 11.8284 1.55872e-05 11.7274C0.000982254 11.6264 0.0402491 11.5372 0.117816 11.4596L5.51589 6.05865L0.117816 0.6577C0.0530657 0.59295 0.0174908 0.506892 0.0110908 0.399525C0.00467413 0.292142 0.0402491 0.198708 0.117816 0.119225C0.195382 0.0397412 0.285124 0 0.387041 0C0.488974 0 0.582891 0.0355746 0.668791 0.106725L6.05724 5.5173L11.4678 0.106725C11.5261 0.0483912 11.6095 0.0160175 11.7178 0.00960083C11.8261 0.00320083 11.9233 0.0397412 12.0092 0.119225C12.0803 0.198708 12.1154 0.288934 12.1145 0.3899C12.1135 0.490867 12.0742 0.580133 11.9967 0.6577L6.59859 6.05865L11.9967 11.4596C12.0614 11.5244 12.097 11.6104 12.1034 11.7178C12.1098 11.8252 12.0742 11.9186 11.9967 11.9981C11.9191 12.0776 11.8294 12.1173 11.7274 12.1173C11.6255 12.1173 11.539 12.0744 11.4678 11.9885L6.05724 6.6Z"
            fill="#1C1B1F"
          />
        </svg>
        <h1 className="w-1/4 border-b-2 pb-2 text-center text-3xl text-grey">
          Cart
        </h1>
      </div>
      {/* Items */}
      <div
        id="hide-scroll"
        className="flex h-[100%] flex-col gap-6 overflow-y-auto py-5 pb-52"
      >
        {Object.keys(cartData).map((key) => {
          const id = Number(key);

          return (
            <CartItem
              key={id}
              id={id}
              amount={cartData[id].amount}
              handleIncrement={() => {
                cartDispatch({ type: "incrementAndUpdate", id: id });
              }}
              handleDecrement={() => {
                cartDispatch({ type: "decrementAndUpdate", id: id });
              }}
              handleRemove={() => {
                cartDispatch({ type: "removeAndUpdate", id: id });
              }}
            />
          );
        })}
      </div>

      <div className="absolute bottom-0 left-0 flex w-full flex-col justify-between gap-5 bg-white p-4">
        <div className="flex justify-between border-b-2 border-black py-2">
          <p className="text-black">Subtotal:</p>
          <p className="text-black">{isLoading ? "Fetching..." : subtotal} Zing</p>
        </div>
        <Link to="/">
          <button className="w-full rounded-full bg-black p-4 transition-transform ease-in-out hover:scale-105">
            Checkout ➜
          </button>
        </Link>
      </div>
    </aside>
  );
};

export { SideCart };
