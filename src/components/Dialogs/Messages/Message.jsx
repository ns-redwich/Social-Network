import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={s.messagesItem}>
            <p className={s.messagesItemName}>{props.name}</p>
            <p className={s.messagesItemText}>{'- ' + props.message}</p>
        </div>
    );
};

export default Message;