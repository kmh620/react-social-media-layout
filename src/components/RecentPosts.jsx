import React from 'react';
import Post from './Post'

function RecentPosts(){
  return (
    <div>
      <Post
        image="https://www.w3schools.com/images/w3schools_green.jpg"
        username="mastermind1"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis "/>
      <Post
        image="https://www.w3schools.com/images/w3schools_green.jpg"
        username="mastermind1"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis "/>
      <Post
        image="https://www.w3schools.com/images/w3schools_green.jpg"
        username="mastermind1"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis "/>
    </div>
  )
}

export default RecentPosts;
