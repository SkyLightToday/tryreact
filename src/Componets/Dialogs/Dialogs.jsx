import React from 'react';
import  './Dialogs.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messeges/Messages';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.state.messages.map((m) =><Messages message={m.message} />);

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