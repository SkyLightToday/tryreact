import React from 'react';
import  './Profile.css';
import MyPosts from './MyPosts/Post/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div className="App-content">
          <ProfileInfo />
          <MyPosts posts={props.state.posts} />
        </div>
    );
}

export default Profile;