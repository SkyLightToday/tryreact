import React from 'react';
import  './Profile.css';
import MyPosts from './MyPosts/Post/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = (props) => {
  // let posts = [
  //     {id: 1, message: 'Привет! Как дела?', likesCount: 32},
  //     {id: 2, message: 'Это мой первый пост.', likesCount: 47},
  // ];


    return (
        <div className="App-content">
          <ProfileInfo />
          <MyPosts posts={props.posts} />
        </div>
    );
}

export default Profile;