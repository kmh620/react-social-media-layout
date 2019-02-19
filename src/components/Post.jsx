import React from 'react';
import PropTypes from "prop-types";

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

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: false
    };
  }


  toggleDetails() {
    console.log(this.state.details)
    if (this.state.details === false) {
      this.setState({details: true})
    } else {
      this.setState({details: false})
    }
  }

  render() {
    return (
      <div>
        <div style={feedGrid}>
          <img src={this.props.image} style={imageStyle}></img>
          <div>
            <h2 style={usernameStyle}>{this.props.username} <span style={handleStyle}>{this.props.handle}</span></h2>
            <p style={paragraphStyle}>{this.props.content}</p>
          </div>
          <p>Likes: {this.props.likes}</p>
          <button onClick={()=> this.toggleDetails()}>show details</button>
          {this.state.details ? <p>{this.props.username}</p>:null
          }
        </div>

      </div>
    )
  }
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
