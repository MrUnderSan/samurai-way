import {StateType} from '../App';
import {addPost, profileReducer, updateNewPostText} from './profile-reducer';
import {addMessage, messagesReducer, updateNewMessageText} from './messages-reducer';
import {sidebarReducer} from './sidebar-reducer';

type AddPostAT = ReturnType<typeof addPost>

type UpdateNewPostTextAT = ReturnType<typeof updateNewPostText>

type UpdateNewMessageTextAT = ReturnType<typeof updateNewMessageText>

type AddMessageAT = ReturnType<typeof addMessage>

export type ActionsType = AddPostAT | UpdateNewPostTextAT | UpdateNewMessageTextAT | AddMessageAT

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Its my first post', likesCount: 20},
                {id: 2, message: 'Yo!', likesCount: 10}
            ],
            newPostText: 'it-kamasutra'
        },
        messagesPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
            ]
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber();

    }
}