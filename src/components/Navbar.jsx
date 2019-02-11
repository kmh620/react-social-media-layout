import React from 'react';

function Navbar(){
  const buttonStyle = {
    padding: '15',
    fontFamily: 'helvetica',
    backgroundColor: '#ffa900',
    borderStyle: 'none',
    margin: '5',
    color: 'white',
    width: '130'
  }
  return (
    <div>
      <button style={buttonStyle}>Home</button>
      <button style={buttonStyle}>Notifications</button>
      <button style={buttonStyle}>Messages</button>
    </div>
  )
}

export default Navbar;
