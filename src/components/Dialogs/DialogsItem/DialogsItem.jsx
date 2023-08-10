import React from 'react';
import s from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    return (
        <NavLink to={'/dialogs/' + props.id}>
            <div className={s.dialogsItem}>{props.name}</div>
        </NavLink>
    );
};

export default DialogsItem;