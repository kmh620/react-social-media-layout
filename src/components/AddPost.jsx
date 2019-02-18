import React from 'react';

function AddPost(){
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
let _tweet = null;

function handleNewPostFormSubmission(event) {
  event.preventDefault();
  console.log(_tweet.value)
}
//end state stuff

  return (
    <div>
      <form onSubmit={handleNewPostFormSubmission}>
        <input
          type="text"
          id='tweet'
          placeholder="What's happening?"
          ref={(input) => {_tweet = input;}}/>
        <button type='submit' style={buttonStyle}>Tweet</button>
        <hr style= {lineColor}/>
      </form>
    </div>
  )
}

export default AddPost;
