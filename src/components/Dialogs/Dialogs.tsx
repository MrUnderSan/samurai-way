import s from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {NewMessageForm} from './NewMessageForm/NewMessageForm';
import {FC} from 'react';

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
}

type PropsType = {
    addMessage: (message: string) => void
} & DialogsPageType

export const Dialogs: FC<PropsType> = (
    {
        dialogs,
        messages,
        addMessage
    }) => {

    const dialogsElements = dialogs.map(d => (
        <Dialog key={d.id} id={d.id} name={d.name}/>
    ))

    const messageElements = messages.map(m => (
        <Message key={m.id} id={m.id} message={m.message}/>
    ))

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <NewMessageForm onSubmit={addMessage}/>
        </div>
    );
};