import {ActionsType} from './store';
import {DialogsPageType} from '../components/Dialogs/Dialogs';

const initState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],

    messages: [
        {id: 1, message: 'Yo!'},
        {id: 2, message: 'Hello!'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Fine, tnx'}
    ],

    newMessageText: ''
}

export const dialogsReducer = (state: DialogsPageType = initState, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            return {...state, newMessageText: action.payload.newMessageText}
        }
        case 'ADD-MESSAGE': {
            const newMessage = {
                id: state.messages.length + 1,
                message: action.payload.message,
            };
            return {...state, messages: [...state.messages, newMessage]}
        }
        default:
            return state
    }
}

export const updateNewMessageText = (newMessageText: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT' as const,
        payload: {newMessageText}
    }
}

export const addMessage = (message: string) => {
    return {
        type: 'ADD-MESSAGE' as const,
        payload: {message}
    }
}