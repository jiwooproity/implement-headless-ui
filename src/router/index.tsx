import { createBrowserRouter } from "react-router-dom";
import { DropDownPage, SelectPage } from "../page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
  },
  {
    path: "/select",
    element: <SelectPage />,
  },
  {
    path: "/dropdown",
    element: <DropDownPage />,
  },
]);

export default router;
