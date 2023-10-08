import {ActionsType} from './state';
import {MessagesPageType} from '../App';

export const messagesReducer = (state: MessagesPageType, action: ActionsType) => {
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