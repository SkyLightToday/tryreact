import React from 'react';
import  './Dialogs.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messeges/Messages';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/state';

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);//error dialogs props-state

    let messagesElements = props.state.messages.map((m) =><Messages message={m.message} />);//error props-state

    let newMessageBody = props.state.newMessageBody;//error props-state

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className="dialog-content">
            <div className="dialog-items">
                {dialogsElements}
            </div>
            <div className="dialog-messages">
                <div>{messagesElements}</div>
                <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder="Напишите сообщение"></textarea></div>
                <div><button onClick={onSendMessageClick}>Отправить</button></div>
            </div>
        </div>
    );
}

export default Dialogs;