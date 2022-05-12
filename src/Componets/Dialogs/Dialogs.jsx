import React from 'react';
import  './Dialogs.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messeges/Messages';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.state.messages.map((m) =><Messages message={m.message} />);

    // let myMessageElement = React.createRef();

    // let myMessage = () => {
    //     let textMessage = myMessageElement.current.value;
    //     alert(textMessage);
    // }

    return (
        <div className="dialog-content">
            <div className="dialog-items">
                {dialogsElements}
            </div>
            <div className="dialog-messages">
                {messagesElements}
                {/* <textarea ref={myMessageElement}></textarea>
                <button onClick={myMessage}>Добавить ответ</button> */}
            </div>
            {/* <div className="dialog-myMessages">
               <div className="textarea">
                    <textarea ref={myMessageElement}></textarea>
                </div>
                <div className="mypostBtn">
                    <button onClick={myMessage}>Добавить ответ</button>
                </div>
            </div> */}
        </div>
    );
}

export default Dialogs;