import s from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import React, {ChangeEvent} from 'react';

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}

type PropsType = {
    addMessage: (message: string) => void
    updateNewMessageText: (text: string) => void
} & DialogsPageType

export const Dialogs: React.FC<PropsType> = (
    {
        dialogs,
        messages,
        newMessageText,
        addMessage,
        updateNewMessageText,
    }) => {

    const dialogsElements = dialogs.map(d => (
        <Dialog key={d.id} id={d.id} name={d.name}/>
    ))

    const messageElements = messages.map(m => (
        <Message key={m.id} id={m.id} message={m.message}/>
    ))

    const addMessageHandler = () => {
        addMessage(newMessageText)
        updateNewMessageText('')
    }

    const updateNewMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewMessageText(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
                <div>
                    <textarea
                        value={newMessageText}
                        onChange={updateNewMessageTextHandler}
                    />
                </div>
                <button onClick={addMessageHandler}>add message</button>
            </div>
        </div>
    );
};