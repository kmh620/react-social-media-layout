import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function AddPost(props){
  //start style stuff
  const inputStyle = {
    padding: '10',
    color: 'gray',
    borderRadius: '5',
    borderStyle: 'none',
    marginTop: '15',
    width: '200',
    marginBottom: '10'
  }
  const lineColor = {
    borderColor: '#303030'
  }
  const buttonStyle = {
    padding: '10',
    fontFamily: 'helvetica',
    backgroundColor: '#ffa900',
    borderStyle: 'none',
    margin: '5',
    color: 'white',
    width: '75px',
    borderRadius: '5'
  }
//end style stuff
//start state stuff
let content = null;

function handleNewPostFormSubmission(event) {
  event.preventDefault();
  props.onNewPostCreation({
    image: "http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png",
    content: content.value,
    username: 'mastermind4',
    handle: '@mastermind4',
    likes: 0,
    id: v4()
  })
  content.value = "what's Happening?";
}
//end state stuff

  return (
    <div>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          type="text"
          id='tweet'
          placeholder="What's happening?"
          ref={(input) => {content = input;}}/>
        <button type='submit' style={buttonStyle}>Tweet</button>
        <hr style= {lineColor}/>
      </form>
    </div>
  )
  AddPost.propTypes = {
    onNewPostCreation: PropTypes.func
  }
}

export default AddPost;
