import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import CollectProductDetails from "./pages/CollectProductDetails";
import SellForm from "./components/sellForm";
import ProductDetails from "./pages/ProductDetails";

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
    }
  ])
  return <RouterProvider router={router} />;;
}

export default App;
