import {DialogsType, MessagesType} from '../../App';
import React from 'react';
import {addMessage, updateNewMessageText} from '../../redux/messages-reducer';
import {Dialogs} from './Dialogs';
import StoreContext from '../../StoreContext';

type StateType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}

type PropsType = {}

export const DialogsContainer: React.FC<PropsType> = () => {

    return (
        <StoreContext.Consumer>
            {store => {

                const addMessageHandler = () => {
                    store.dispatch(addMessage())
                }

                const updateNewMessageTextHandler = (text: string) => {
                    store.dispatch(updateNewMessageText(text))
                }
                return <Dialogs
                    state={store.getState().messagesPage}
                    addMessage={addMessageHandler}
                    updateNewMessageText={updateNewMessageTextHandler}
                />
            }}
        </StoreContext.Consumer>

    );
};