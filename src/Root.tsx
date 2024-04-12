import { Outlet } from "react-router-dom";
import { NavBar } from "@/components";
import { createContext, type FC } from "react";
import { useCart } from "@/hooks";
import { cartDataType, cartDispatch } from "@/types";

const cartContext = createContext<{
  cartData: cartDataType;
  cartDispatch: cartDispatch;
}>({ cartData: {}, cartDispatch: () => {} });

const Root: FC = () => {
  const { cartData, cartDispatch, isLoading } = useCart();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <cartContext.Provider value={{ cartData, cartDispatch }}>
      <NavBar />
      <Outlet />
    </cartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { Root, cartContext };
