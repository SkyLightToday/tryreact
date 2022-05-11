import React from 'react';
import  './../Dialogs.css';

const Messages = (props) => {
    return (
        <div className="message">{props.message}</div>
    )
}

export default Messages;