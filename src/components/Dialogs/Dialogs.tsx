import s from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {DialogsType, MessagesType} from '../../App';
import React, {createRef} from 'react';
import {ActionsType} from '../../redux/state';

type StateType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}

type PropsType = {
    state: StateType
    dispatch: (action: ActionsType) => void

}
export const Dialogs: React.FC<PropsType> = (
    {
        state, dispatch
    }) => {

    const newMessage = createRef<HTMLTextAreaElement>();

    const dialogsElements = state.dialogs.map(d => (
        <Dialog key={d.id} id={d.id} name={d.name}/>
    ))

    const messageElements = state.messages.map(m => (
        <Message key={m.id} id={m.id} message={m.message}/>
    ))

    const addMessageHandler = () => {
        dispatch({type: 'ADD-MESSAGE'})
    }

    const updateNewMessageTextHandler = () => {
        if(newMessage.current) {
            dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', payload: {newMessageText: newMessage.current.value}})
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
                    <textarea
                        ref={newMessage}
                        value={state.newMessageText}
                        onChange={updateNewMessageTextHandler}
                    />
                </div>
                <button onClick={addMessageHandler}>add message</button>
            </div>
        </div>
    );
};