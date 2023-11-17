import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CollectProductDetails from "./pages/CollectProductDetails";
import SellForm from "./components/sellForm";
import ProductDetails from "./pages/ProductDetails";
import SellerBargain from "./pages/Offers";
import Offers from "./pages/Offers";
import UserProfile from "./pages/UserProfile";
import Navbar from "./components/Navbar";
import Root from "./pages/Root";
import Checkout from "./pages/Checkout";
function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      id: "root",
      children: [
        {
          path: "/sellProducts",
          element: <CollectProductDetails />,
        },
        {
          path: "/productDetails",
          element: <ProductDetails />,
        },
        {
          path: "/Offers",
          element: <Offers />,
        },
        {
          path: "/UserProfile",
          element: <UserProfile />,
        },
        {
          path:"/checkout",
          element:<Checkout />,
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
