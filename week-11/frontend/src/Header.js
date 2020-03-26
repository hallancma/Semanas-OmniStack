import React from 'react';
//props
function Header({ children }) {
  return (
    <header>
      <h1>{children}</h1>
    </header>
  );
}

export default Header;
