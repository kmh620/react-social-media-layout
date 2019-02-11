import React from 'react';
import PropTypes from 'prop-types';

function Connections({image, username, handle}){
  const feedGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    textAlign: 'left',
  }

  const imageStyle = {
    margin: '15',
    width: '75',
    borderRadius: '50%',
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, .3)'
  }

  const buttonStyle = {
    padding: '10',
    fontFamily: 'helvetica',
    backgroundColor: '#ffa900',
    borderStyle: 'none',
    margin: '5',
    color: 'white',
    width: '125',
  }

  const usernameStyle = {
    fontSize: '22',
    marginBottom: '5',
    fontWeight: 'bold'
  }

  const handleStyle = {
    fontWeight: 'lighter',
    fontSize: '16',
    marginBottom: '5',
    color: 'gray'
  }

  return (
    <div>
      <div style={feedGrid}>
        <img src={image} style={imageStyle}></img>
        <div>
          <h2 style={usernameStyle}>{username} <br></br><span style={handleStyle}>{handle}</span></h2>
          <button style={buttonStyle}>Button</button>
        </div>
      </div>
    </div>
  )
}

Connections.propTypes = {
  image: PropTypes.string,
  username: PropTypes.string,
  handle: PropTypes.string
};

export default Connections;
