import s from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {DialogsType, MessagesType} from '../../App';
import React, {createRef} from 'react';

type StateType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

type PropsType = {
    state: StateType
}
export const Dialogs: React.FC<PropsType> = ({state}) => {

    const newMessage = createRef<HTMLTextAreaElement>();

    const dialogsElements = state.dialogs.map(d => (
        <Dialog id={d.id} name={d.name}/>
    ))

    const messageElements = state.messages.map(m => (
        <Message id={m.id} message={m.message}/>
    ))

    const addMessage = () => {
        if(newMessage.current) {
            alert(newMessage.current.value)
        }
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
                    <textarea ref={newMessage}/>
                </div>
                <button onClick={addMessage}>add message</button>
            </div>
        </div>
    );
};