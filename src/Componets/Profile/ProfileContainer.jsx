import React from 'react';
import  './Profile.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as axios from 'axios';
import {setUserProfile} from './../../Redux/profile-reducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        //this.props.toggleIsFetching(true);
       axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
               this.props.setUserProfile(response.data);
           });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);