import { createBrowserRouter } from "react-router-dom";

import { Dropdown } from "@/shared/components";

const router = createBrowserRouter([
  {
    path: "/dropdown",
    element: <Dropdown />,
  },
]);

export default router;
