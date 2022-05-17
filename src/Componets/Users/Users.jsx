import * as axios from 'axios';
import React from 'react';
import  './Users.css';
import './../../Redux/users-reducer';//?
//import * as axios from 'axios';
import userPhoto from '../../../src/assets/img/images.2.jpg';

class Users extends React.Component {

     componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
     }

     onPageChenged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items);
            });
     }

//this.props.setCurrentPage(p)
// https://social-network.samuraijs.com/api/1.0/users
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div className="users">
                <div>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p ? "selectedPage active" : "selectedPage"} onClick={() => {this.onPageChenged(p);}}> {p}</span>;
                    })}
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <div>
                            <div className="userImg">
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="#" />
                            </div>
                            <div className="userBtn">
                                {u.followed ? <button onClick={() => {this.props.unfollow(u.id)}}>unfollow</button> : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}
                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{u.name}</div>{/*{u.fullname} */}
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}


export default Users;

// <input type="button" value="Кнопка" onclick="alert('Вы нажали кнопку!')" name="btn">