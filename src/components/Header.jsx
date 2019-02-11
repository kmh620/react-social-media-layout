import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Tweet from './Tweet';

function Header(){
  let headerStyle = {
    padding: '30',
    display: 'grid',
    gridTemplateColumns: '5fr 1fr 1fr'
  }
  return (
    <div>
      <div style={headerStyle}>
        <Navbar/>
        <Search/>
        <Tweet/>
      </div>
      <hr/>
    </div>
  );
}

export default Header;
