import s from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {DialogsType, MessagesType} from '../../App';
import React from 'react';

type PropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}
export const Dialogs: React.FC<PropsType> = ({dialogs, messages}) => {

    const dialogsElements = dialogs.map(d => (
        <Dialog id={d.id} name={d.name}/>
    ))

    const messageElements = messages.map(m => (
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