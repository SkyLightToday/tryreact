import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching} from '../../Redux/users-reducer';
import Users from './Users';
import * as axios from 'axios';
import  './Users.css';//import v Winter?
import Winter from './../Common/Preloader/Winter.js';

class UsersContainer extends React.Component {

    componentDidMount() {
       this.props.toggleIsFetching(true);
       axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
               this.props.toggleIsFetching(false);
               this.props.setUsers(response.data.items);
               this.props.setTotalUsersCount(response.data.totalCount);
           });
    }

    onPageChenged = (pageNumber) => {
       this.props.setCurrentPage(pageNumber);
       this.props.toggleIsFetching(true);
       axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
               this.props.toggleIsFetching(false);
               this.props.setUsers(response.data.items);
           });
    }

   render() {
       return <>
       {this.props.isFetching ? <Winter /> : null}
       <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize} currentPage={this.props.currentPage} onPageChenged={this.onPageChenged} users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow} />
       </>
   }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}


export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage,setTotalUsersCount, toggleIsFetching}) (UsersContainer);