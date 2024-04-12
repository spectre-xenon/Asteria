import { action, useCartReturn, cartDataType } from "@/types";
import { useEffect, useReducer, useState } from "react";

const updateLocalStorage = (item: string, data: cartDataType) => {
  const currStateJson = JSON.stringify(data);
  localStorage.setItem(item, currStateJson);
};

const reducer = (state: cartDataType, action: action): cartDataType => {
  const { type } = action;

  if (type === "initialData") return { ...action.data };

  if (type === "incrementAndUpdate") {
    const { id } = action;

    if (state[id] === undefined) {
      state[id] = { amount: 1 };
      updateLocalStorage("cart", state);
      return { ...state };
    }

    state[id].amount += 1;
    updateLocalStorage("cart", state);

    return { ...state };
  }

  if (type === "decrementAndUpdate") {
    const { id } = action;

    if (state[id] === undefined) return state;
    if (state[id].amount === 1) {
      delete state[id];
      updateLocalStorage("cart", state);
      return { ...state };
    }

    state[id].amount -= 1;
    updateLocalStorage("cart", state);

    return { ...state };
  }

  if (type === "removeAndUpdate") {
    const { id } = action;

    if (state[id] === undefined) return state;
    delete state[id];
    updateLocalStorage("cart", state);
    return { ...state };
  }
  return state;
};

const useCart = (): useCartReturn => {
  const [cartData, cartDispatch] = useReducer(reducer, {});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const data: cartDataType = JSON.parse(
        localStorage.getItem("cart") || "{}",
      );
      cartDispatch({ type: "initialData", data });
      setIsLoading(false);
    } else {
      localStorage.setItem("cart", "{}");
      setIsLoading(false);
    }
  }, []);

  return { cartData, cartDispatch, isLoading };
};

export { useCart };
