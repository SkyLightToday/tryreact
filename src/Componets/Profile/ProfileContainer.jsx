import React from 'react';
import  './Profile.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import * as axios from 'axios';
import {setUserProfile} from './../../Redux/profile-reducer';
import {useParams} from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId;//.match.params
       axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
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

const WithUrlDataContainerComponent = (props) => {
    return <ProfileContainer {...props} params={useParams()} />
}

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);