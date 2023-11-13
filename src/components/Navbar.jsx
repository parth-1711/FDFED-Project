import React, { useState } from "react";
import "./Navbar.css"; // You can create a separate CSS file for styling

const Navbar = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">Your Logo</div>
        <button className="navbar-toggle" onClick={toggleOverlay}>
          Toggle Overlay
        </button>
      </nav>

      {/* Overlay */}
      {overlayVisible && (
        <div className="overlay" onClick={toggleOverlay}>
          {/* Content of the overlay */}
          <div className="overlay-content">
            <p>Overlay Content Goes Here</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
