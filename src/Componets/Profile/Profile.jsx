import React from 'react';
import  './Profile.css';
import MyPostsContainer from './MyPosts/Post/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div className="App-content">
          <ProfileInfo />
          <MyPostsContainer store={props.store} />
        </div>
    );
}

export default Profile;

//{/* <MyPostsContainer posts={props.profilePage.posts} dispatch={props.dispatch} newPostText={props.profilePage.newPostText} /> */}