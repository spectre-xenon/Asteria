import { Dispatch } from "react";

export type item = {
  id: number;
  name: string;
  price: number;
  category: string[];
  full: string;
  outOfStock: boolean;
};

export type useFetchData = item | item[];

// Routes
type route = {
  path: string;
  element: JSX.Element;
  errorElement?: JSX.Element;
  children?: route[];
};

export type routes = route[];

export type cartDataType = {
  [id: number]: { amount: number };
};

export type action =
  | {
      type: "incrementAndUpdate" | "decrementAndUpdate" | "removeAndUpdate";
      id: number;
    }
  | { type: "initialData"; data: cartDataType };

export type cartDispatch = Dispatch<action>;

export type useCartReturn = {
  cartData: cartDataType;
  cartDispatch: cartDispatch;
  isLoading: boolean;
};
