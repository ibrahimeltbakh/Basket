// icon fontawesome
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Components/Layout/Layout.jsx";
import NotFound from "./Components/NotFound/NotFound";
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Cart/Checkout';
import Paymoney from './Components/Cart/Paymoney';

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "cart", element:<Cart />},
        { path: "Checkout", element:<Checkout />},
        { path: "Paymoney", element:<Paymoney />},

        { path: "*", element: <NotFound /> },
      ],
      
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
