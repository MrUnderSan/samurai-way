import {DialogsType, MessagesType} from '../../App';
import React from 'react';
import {ActionsType} from '../../redux/store';
import {addMessage, updateNewMessageText} from '../../redux/messages-reducer';
import {Dialogs} from './Dialogs';

type StateType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}

type PropsType = {
    state: StateType
    dispatch: (action: ActionsType) => void
}
export const DialogsContainer: React.FC<PropsType> = (
    {
        state,
        dispatch
    }) => {

    const addMessageHandler = () => {
        dispatch(addMessage())
    }

    const updateNewMessageTextHandler = (text: string) => {
        dispatch(updateNewMessageText(text))
    }

    return (
        <Dialogs
            state={state}
            addMessage={addMessageHandler}
            updateNewMessageText={updateNewMessageTextHandler}
        />
    );
};