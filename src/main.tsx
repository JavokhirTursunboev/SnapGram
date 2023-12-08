import ReactDOM from "react-dom";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
ReactDOM.render(<RouterProvider router={router} />, document.getElementById("root"));
