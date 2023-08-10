import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Messages/Message";

const Dialogs = (props) => {
    let dialogsItems = props.dialogsPageD.dialogsD.map((item) => <DialogsItem id={item.id} name={item.name}/>)
    let messagesItems = props.dialogsPageD.messagesD.map((item) => <Message name={item.name} message={item.message}/>)

    const onSendNewMessage = () => {
        props.sendNewMessage();
    }

    const onChangeNewMessageInput = (e) => {
        props.changeNewMessageInput(e.target.value);
    }
 

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsItems}</div>
            <div className={s.messages}>
                <div className={s.messagesItems}>{messagesItems}</div>
                <div className={s.formSendMessage}>
                    <input className={s.inputNewMessage} value={props.dialogsPageD.MessageInputV} onChange={onChangeNewMessageInput} placeholder='...' type="text"/>
                    <button className={s.btnSendMessage} onClick={onSendNewMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;