import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Portfolio } from "../pages/Portfolio";

export const routes = [
  {
    element: "/",
    path: Home,
  },
  {
    element: "/about",
    path: About,
  },
  {
    element: "/portfolio",
    path: Portfolio,
  },
  {
    element: "*",
    path: NotFound,
  },
];
