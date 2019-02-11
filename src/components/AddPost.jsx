import React from 'react';

function AddPost(){
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
  return (
    <div>
      <form>
        <input style={inputStyle} value="What's happening?"></input>
        <button style={buttonStyle}>Tweet</button>
        <hr style= {lineColor}/>
      </form>
    </div>
  )
}

export default AddPost;
