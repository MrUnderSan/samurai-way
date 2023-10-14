import {ActionsType} from './store';
import {MessagesPageType} from '../App';

const initState = {
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

export const messagesReducer = (state: MessagesPageType = initState, action: ActionsType) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            state.newMessageText = action.payload.newMessageText;
            return state
        }
        case 'ADD-MESSAGE': {
            const newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state
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

export const addMessage = () => {
    return {
        type: 'ADD-MESSAGE' as const
    }
}