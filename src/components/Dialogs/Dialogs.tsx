import s from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {DialogsType, MessagesType} from '../../App';
import React from 'react';

type StateType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

type PropsType = {
    state: StateType
}
export const Dialogs: React.FC<PropsType> = ({state}) => {

    const dialogsElements = state.dialogs.map(d => (
        <Dialog id={d.id} name={d.name}/>
    ))

    const messageElements = state.messages.map(m => (
        <Message id={m.id} message={m.message}/>
    ))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.mesages}>
                {messageElements}
            </div>
        </div>
    );
};