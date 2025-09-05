import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Components/Layout/layout";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
