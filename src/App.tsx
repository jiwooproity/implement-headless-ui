import "./app.css";

import { RouterProvider } from "react-router-dom";
import router from "./router";

const App = () => {
  return (
    <div className="global-layout">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
