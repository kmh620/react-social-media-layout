import React from 'react';

function ProfileInfo(){
  const styledProfileInfoTop = {
    borderStyle: 'solid',
    marginBottom: '30',
  }

  const styledProfileInfoBottom = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr'
  }
  return (
    <div style={styledProfileInfoTop}>
      <h1>first name, last name</h1>
      <hr/>
        <div style={styledProfileInfoBottom}>
          <h3>Tweets</h3>
          <h3>Following</h3>
          <h3>Followers</h3>
        </div>
    </div>
  )
}

export default ProfileInfo;
