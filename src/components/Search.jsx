import React from 'react';

function Search(){
  const inputStyle = {
    padding: '10',
    color: 'gray',
    borderRadius: '5',
    borderStyle: 'none',
    marginTop: '15',
    width: '200',
    marginRight: '20'
  }
  return (
    <div>
      <form>
        <input value="Search" style={inputStyle}></input>
      </form>
    </div>
  )
}

export default Search;
