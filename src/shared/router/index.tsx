import { createBrowserRouter } from "react-router-dom";

import { Dropdown, Checkbox, Search } from "@/shared/components";
import { User } from "@/widgets";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dropdown />,
  },
  {
    path: "/checkbox",
    element: <Checkbox />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/user-skeleton",
    element: <User />,
  },
]);

export default router;
