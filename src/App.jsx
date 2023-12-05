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
import Admin from "./pages/Admin";
import Home from'./pages/Home';
import Landing from "./pages/Landing";
import LoginForm from "./pages/Login";
import RegistrationForm from "./pages/SignUp";
import Myoffers from "./pages/Myoffers";
// import Home from "./pages/Home"
import AfterSearch from "./pages/AfterSearch"
import Team from "./scenes/team";
// import Myoffers from "./pages/Myoffers"


function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Landing/>
    },
    {
      path: "/",
      element: <Root />,
      id: "root",
      children: [
       
        {
          path:"/Home",
          element:<Home/>
        },
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
        },
        {
          path:'/MyOffers',
          element:<Myoffers/>
        }
        
      ],  
      
    },
    {
      path:'/login',
      element:<LoginForm/>
    },
    {
      path:'/signUp',
      element:<RegistrationForm/>
    },
    {
      path:"/admin/*",
      element:<Admin />,
      // children:[
        
      // ]
    },
    {
      path:'/team',
      element:<Team/>
    }
    
  ]);
  return <RouterProvider router={router} />;
}

export default App;
