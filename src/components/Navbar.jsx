import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);
  
    const toggleOverlay = () => {
      setOverlayVisible(!overlayVisible);
    };
    
    return (
          <nav>
            <div className="navbar-contents">
            <Link to="/" className="title">
              <div className="logo">
                <img src="logo.png" alt="phnx logo" style={{ height: "3rem" }}></img>
              </div>
              <div className="titletext">PHOENIX</div>
            </Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}></div>
            <div className="searchbar">
              <div className="searchicon">
                <img src="search.png" alt="search icon"></img>
              </div>
              <div className="searchtext">
                <input type="text" placeholder="  Search"></input>
              </div>
            </div>
            <ul className={menuOpen ? "open" : ""}>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>


        <button className="navbar-toggle" onClick={toggleOverlay}>
          User Profile
        </button>


            {overlayVisible && (
        <div className="overlay" onClick={toggleOverlay}>
          {/* Content of the overlay */}
          <div className="overlay-content">
            <p>Overlay Content Goes Here</p>
          </div>
        </div>
      )}
              </div>
            </nav>
  );
};

  
  export default Navbar;






//   const [profileOpen, setProfileOpen] = useState(true);

//   return (
//     <nav>
//       <Link to="/" className="title">
//         <div className="logo">
//           <img src="logo.png" alt="phnx logo" style={{ height: "3rem" }}></img>
//         </div>
//         <div className="titletext">PHOENIX</div>
//       </Link>
//       <div className="menu" onClick={() => setMenuOpen(!menuOpen)}></div>
//       <div className="searchbar">
//         <div className="searchicon">
//           <img src="search.png" alt="search icon"></img>
//         </div>
//         <div className="searchtext">
//           <input type="text" placeholder="  Search"></input>
//         </div>
//       </div>
//       <ul className={menuOpen ? "open" : ""}>
//         <li>
//           <NavLink to="/about">About</NavLink>
//         </li>
//         <li>
//           <NavLink to="/services">Services</NavLink>
//         </li>
//         <li>
//           <NavLink to="/contact">Contact</NavLink>
//         </li>
//       </ul>

//       {/* User Profile Offcanvas */}
//       <div className={`profile-offcanvas ${profileOpen ? "open" : ""}`}>
//         {/* Add your user profile content here */}
//         <div className="profile-content">
//           {/* Your user profile information and actions */}
//         </div>
//         <button onClick={() => setProfileOpen(!profileOpen)}>Close Profile</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState } from "react";
// import "./Navbar.css"; // You can create a separate CSS file for styling

// const Navbar = () => {
//   const [overlayVisible, setOverlayVisible] = useState(false);

//   const toggleOverlay = () => {
//     setOverlayVisible(!overlayVisible);
//   };

//   return (
//     <div>
//      <Link to="/" className="title">
// <div className="logo">
// <img src="logo.png" alt="phnx logo" style={{ height: "3rem" }}></img>
// </div>
// <div className="titletext">PHOENIX</div>
// </Link>
// <div className="menu" onClick={() => setMenuOpen(!menuOpen)}></div>
// <div className="searchbar">
// <div className="searchicon">
// <img src="search.png" alt="search icon"></img>
// </div>
// <div className="searchtext">
// <input type="text" placeholder="  Search"></input>
// </div>
// </div>
// <ul className={menuOpen ? "open" : ""}>
// <li>
// <NavLink to="/about">About</NavLink>
// </li>
// <li>
// <NavLink to="/services">Services</NavLink>
// </li>
// <li>
// <NavLink to="/contact">Contact</NavLink>
// </li>
// </ul>

// //       {/* Overlay */}
//      {overlayVisible && (
//         <div className="overlay" onClick={toggleOverlay}>
//           {/* Content of the overlay */}
//           <div className="overlay-content">
//             <p>Overlay Content Goes Here</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;