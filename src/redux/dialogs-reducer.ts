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
    ]
}


type AddMessageAT = ReturnType<typeof addMessage>

export type DialogsActionsType = AddMessageAT

export const dialogsReducer = (state: DialogsPageType = initState, action: DialogsActionsType): DialogsPageType => {
    switch (action.type) {
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


export const addMessage = (message: string) => {
    return {
        type: 'ADD-MESSAGE' as const,
        payload: {message}
    }
}