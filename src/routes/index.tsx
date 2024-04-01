import { Home, Shop, About, Item, Error } from "@/pages";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/shop/:id",
    element: <Item />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export { routes };
