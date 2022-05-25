import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from '../../../src/assets/img/images.2.jpg';
import * as axios from 'axios';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }


    return (
        <div className="users">
                <div>
                    {pages.map(p => {
                        return <span className={props.currentPage === p ? "selectedPage active" : "selectedPage"} onClick={() => {props.onPageChenged(p);}}> {p < 20 ? p : ""}</span>;//this.onPageChenged(p).props.onPageChanged(p); }}>{p < 21 ? p : ""}//{props.onPageChenged(p);}}> {p}--уменьшить кол-во страниц
                    })}
                </div>
                {
                    props.users.map(u => <div key={u.id}>
                      <div className="usersContainer">
                        <div className="userItemImg">
                            <div className="userImg">
                                <NavLink to={'/profile/*' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="#" />
                                </NavLink>
                            </div>
                            <div className="userBtn">
                                {u.followed ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true, headers: {"API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"}}).then(response => {
                                        // if(response.data.resultCode === 0) {
                                        //     props.unfollow(u.id)
                                        // }
                                        response = props.unfollow(u.id)
                                    });

                                    }}>unfollow</button> : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true, headers: {"API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"}}).then(response => {
                                        // if(response.data.resultCode === 0) {
                                        //     props.follow(u.id)
                                        // }
                                        response = props.follow(u.id)

                                    });

                                    }}>Follow</button>}
                            </div>
                        </div>
                        <div className="userItemName">
                            <div className="userName1">
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div className="userName2">
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </div>
                        </div>
                      </div>
                    </div>)
                }
            </div>
    )
}

export default Users;