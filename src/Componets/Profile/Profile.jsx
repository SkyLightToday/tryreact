import React from 'react';
import  './Profile.css';
import MyPosts from './MyPosts/Post/MyPosts';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div className="App-content">
          <ProfileInfo />
          <MyPosts posts={props.profilePage.posts} dispatch={props.dispatch} newPostText={props.profilePage.newPostText} />
        </div>
    );
}

export default Profile;