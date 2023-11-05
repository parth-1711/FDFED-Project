import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CollectProductDetails from "./pages/CollectProductDetails";
import SellForm from "./components/sellForm";
import ProductDetails from "./pages/ProductDetails";
import SellerBargain from "./pages/Offers";
import Offers from "./pages/Offers";

function App() {
  const [count, setCount] = useState(0);
  const router=createBrowserRouter([
    {
      path:'/sellProducts',
      element:<CollectProductDetails/>
    },
    {
      path:'/productDetails',
      element:<ProductDetails/>
    },
    {
      path:'/Offers',
      element:<Offers/>
    }
  ])
  return <RouterProvider router={router} />;;
}

export default App;
