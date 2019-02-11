import React from 'react';
import PropTypes from 'prop-types';

function Connections({image, username}){
  const feedGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    textAlign: 'left',
  }
  const imageStyle = {
    margin: '15',
    width: '75'
  }

  return (
    <div>
      <div style={feedGrid}>
        <img src={image} style={imageStyle}></img>
        <div>
          <h2>{username}</h2>
          <button>Button</button>
        </div>
      </div>
      <hr/>
    </div>
  )
}

Connections.propTypes = {
  image: PropTypes.string,
  username: PropTypes.string,
};

export default Connections;
