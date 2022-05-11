import React from 'react';
import  './Profile.css';
import MyPosts from './MyPosts/Post/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
        <div className="App-content">
          <ProfileInfo />
          <MyPosts />
        </div>
    );
}

export default Profile;