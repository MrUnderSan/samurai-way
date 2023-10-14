import s from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {DialogsType, MessagesType} from '../../App';
import React, {ChangeEvent} from 'react';
import {ActionsType} from '../../redux/store';
import {addMessage, updateNewMessageText} from '../../redux/messages-reducer';

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

    const dialogsElements = state.dialogs.map(d => (
        <Dialog key={d.id} id={d.id} name={d.name}/>
    ))

    const messageElements = state.messages.map(m => (
        <Message key={m.id} id={m.id} message={m.message}/>
    ))

    const addMessageHandler = () => {
        dispatch(addMessage())
    }

    const updateNewMessageTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageText(e.currentTarget.value))
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
                        value={state.newMessageText}
                        onChange={updateNewMessageTextHandler}
                    />
                </div>
                <button onClick={addMessageHandler}>add message</button>
            </div>
        </div>
    );
};