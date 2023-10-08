import {StateType} from '../App';

type AddPostAT = {
    type: 'ADD-POST'
}

type UpdateNewPostTextAT = {
    type: 'UPDATE-NEW-POST-TEXT'
    payload: {
        newPostText: string
    }
}

type UpdateNewMessageTextAT = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    payload: {
        newMessageText: string
    }
}

type AddMessageAT = {
    type: 'ADD-MESSAGE'
}

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
        switch (action.type) {
            case 'ADD-POST': {
                const newPost = {
                    id: this._state.profilePage.posts.length + 1,
                    message: this._state.profilePage.newPostText,
                    likesCount: 0,
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber();
                break;
            }
            case 'UPDATE-NEW-POST-TEXT': {
                this._state.profilePage.newPostText = action.payload.newPostText;
                this._callSubscriber();
                break;
            }
            case 'UPDATE-NEW-MESSAGE-TEXT': {
                this._state.messagesPage.newMessageText = action.payload.newMessageText;
                this._callSubscriber();
                break;
            }
            case 'ADD-MESSAGE': {
                const newMessage = {
                    id: this._state.messagesPage.messages.length + 1,
                    message: this._state.messagesPage.newMessageText,
                };
                this._state.messagesPage.messages.push(newMessage);
                this._state.messagesPage.newMessageText = '';
                this._callSubscriber();
                break;
            }
            default:
                throw new Error('Incorrect action');
        }
    }

}