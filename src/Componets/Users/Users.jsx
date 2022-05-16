import * as axios from 'axios';
import React from 'react';
import  './Users.css';
//import * as axios from 'axios';
import userPhoto from '../../../src/assets/img/images.2.jpg';


 let Users = (props) => {
     let getUsers = () => {
        if(props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        });
     }
    }
    return (
        <div className="users">
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(u => <div key={u.id}>
                    <div>
                        <div className="userImg">
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="#" />
                        </div>
                        <div className="userBtn">
                            {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>unfollow</button> : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
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
};

export default Users;

// {id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9-_PKWHh4PgpZjm4VW1iPcasscBfo6nEpw&usqp=CAU', followed: true, fullname: 'Муся', status: 'В поисках кота-разбойника', location: {city: 'Москва', country: 'Россия',}},
// {id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6GZTz8xDsVLabu_bRJmmAy0vg3FlNyteyCQ&usqp=CAU', followed: false, fullname: 'Саймон', status: 'Дегустация рыбы', location: {city: 'Владимир', country: 'Россия',}},
// {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkpl4k-ZesxKZbQVnD5o8jw8FMacH5UzOjDw&usqp=CAU', followed: false, fullname: 'Бос', status: 'Вызываю на бой', location: {city: 'Нур-Султан', country: 'Казахстан',}},
// {id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgJboAeylU14Tr7UDctlD0LF5nPDNXUhxtbg&usqp=CAU', followed: true, fullname: 'Фрося', status: 'В ожидании котяток', location: {city: 'Минск', country: 'Беларусь',}},