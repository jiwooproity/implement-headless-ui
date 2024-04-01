import { createBrowserRouter } from "react-router-dom";
import { Main } from "@/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

export default router;
