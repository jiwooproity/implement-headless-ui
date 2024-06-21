import { RouterProvider } from "react-router-dom";

import "@/shared/styles/global.css";
import router from "@/shared/router";

const App = () => {
  return (
    <div className="main">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
