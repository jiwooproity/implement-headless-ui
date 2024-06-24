import { createBrowserRouter } from "react-router-dom";

import { Dropdown, Checkbox, Search } from "@/shared/components";

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
]);

export default router;
