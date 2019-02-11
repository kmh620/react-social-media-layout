import React from 'react';
import PropTypes from "prop-types";

function Post({image, username, content}){
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
          <p>{content}</p>
        </div>
      </div>
      <hr/>
    </div>
  )
}

Post.propTypes = {
  image: PropTypes.string,
  username: PropTypes.string,
  content: PropTypes.string
};

export default Post;
