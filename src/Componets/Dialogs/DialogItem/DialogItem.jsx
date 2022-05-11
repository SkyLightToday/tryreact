import React from 'react';
import  './../Dialogs.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className="user-item active">
                    <NavLink to={path}>{props.name}</NavLink>
                </div>
    );
}

export default DialogItem;