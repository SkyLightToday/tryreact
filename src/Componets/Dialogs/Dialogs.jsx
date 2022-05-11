import React from 'react';
import  './Dialogs.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className="user-item active">
                    <NavLink to={path}>{props.name}</NavLink>
                </div>
    );
}

const Messages = (props) => {
    return (
        <div className="message">{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Василий'},
        {id: 2, name: 'Маркиза'},
        {id: 3, name: 'Бэлла'},
        {id: 4, name: 'Том'},
        {id: 5, name: 'Ватсон'},
    ];

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messages = [
        {id: 1, message: 'Привет! Пойдёшь сегодня гулять по крышам?'},
        {id: 2, message: 'О, можно я с вами гулять буду'},
        {id: 3, message: 'Василий опять подрался с Ватсоном. Печально'},
        {id: 4, message: 'Сегодня в магазине продовалась вкусная колбаса!'},
        {id: 5, message: 'Ну, пойдём гулять?'},
    ];

    let messagesElements = messages.map((m) =><Messages message={m.message} />);

    return (
        <div className="dialog-content">
            <div className="dialog-items">
                {dialogsElements}
            </div>
            <div className="dialog-messages">
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;