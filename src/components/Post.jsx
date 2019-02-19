import React from 'react';
import PropTypes from "prop-types";


function Post(props) {
  let detailValue = false;
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
    borderColor: 'rgba(255, 255, 255, .2)'
  }



  const usernameStyle = {
    fontSize: '22',
    marginBottom: '0',
    fontWeight: 'bold',
  }

  const handleStyle = {
    fontWeight: 'lighter',
    fontSize: '16',
    marginBottom: '5',
    color: 'gray',
    marginBottom: '0'
  }

  const paragraphStyle = {
    fontWeight: 'lighter',
    marginTop: '6'
  };

  function toggleDetails() {
    console.log(detailValue)
    if (detailValue === false) {
      detailValue = true;
    } else {
      detailValue = false;
    }
  }

  function getDetails(id) {
    props.onGetDetails(id);
  }

  return (

    <div>
      <div style={feedGrid}>
        <img src={props.image} style={imageStyle}></img>
        <div>
          <h2 style={usernameStyle}>{props.username} <span style={handleStyle}>{props.handle}</span></h2>
          <p style={paragraphStyle}>{props.content}</p>
        </div>
        <p>Likes: {props.likes}</p>
        <button onClick={()=> toggleDetails()}>show details</button>
          {detailValue ?
            <p>"hello"</p>:
              null
          }
      </div>

    </div>
  )
}


Post.propTypes = {
  image: PropTypes.string,
  username: PropTypes.string,
  content: PropTypes.string,
  handle: PropTypes.string,
  likes: PropTypes.number,
  id: PropTypes.string,
  details: PropTypes.bool,
  onGetDetails: PropTypes.func
};

export default Post;
