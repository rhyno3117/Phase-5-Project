import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = menuOpen ? (
    <div className="dropdown-content">
      <div className="menu-item">My Closet</div>
      <div className="menu-item">Events</div>
      <div className="menu-item">Logout</div>
    </div>
  ) : null;

  return (
    <div style={{ width: '800%' }}>
      <div style={{ backgroundColor: 'black', color: 'white', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ fontSize: '24px' }}>StyleMate</div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="menu-item" onClick={toggleMenu}>
            &#9776;
          </div>
          {menuItems}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
