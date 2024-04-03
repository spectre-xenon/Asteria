export type item = {
  id: number;
  name: string;
  price: number;
  category: string[];
  full: string;
  outOfStock: boolean;
};

export type useFetchData = item | item[];
