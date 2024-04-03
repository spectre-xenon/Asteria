import { Home, Shop, About, Item, Error } from "@/pages";
import { Root } from "@/Root";
import type { routes } from "@/types";

const routes: routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
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
    ],
  },
];

export { routes };
