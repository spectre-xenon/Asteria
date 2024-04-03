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
