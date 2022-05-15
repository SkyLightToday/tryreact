import React from 'react';
import  './Dialogs.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messeges/Messages';

const Dialogs = (props) => {

    //let state = props.store.getState().dialogsPage;
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);//error dialogs props-state

    let messagesElements = state.messages.map((m) =><Messages message={m.message} key={m.id} />);//error props-state

    let newMessageBody = state.newMessageBody;//error props-state

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        //props.store.dispatch(updateNewMessageBodyCreator(body));
        props.updateNewMessageBody(body);
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