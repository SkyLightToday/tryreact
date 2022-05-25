import React from 'react';
import  './Profile.css';
import MyPostsContainer from './MyPosts/Post/MyPostsContainer';
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div className="App-content">
          <ProfileInfo profile={props.profile} />
          <MyPostsContainer />
          {/* у него нет  store={props.store}*/}
        </div>
    );
}

export default Profile;