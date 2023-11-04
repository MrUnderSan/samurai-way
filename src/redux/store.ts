import {ProfileActionsType, profileReducer} from './profile-reducer';
import {DialogsActionsType, dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';


type DialogsType = {
    id: number
    name: string
}

type MessagesType = {
    id: number
    message: string
}

type MessagesPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}

type PostsType = {
    id: number
    message: string
    likesCount: number
}

type ProfileType = {
    "aboutMe": null | string
    "contacts": {
        "facebook": null | string
        "website": null | string
        "vk": null | string
        "twitter": null | string
        "instagram": null | string
        "youtube": null | string
        "github": null | string
        "mainLink": null | string
    },
    "lookingForAJob": boolean
    "lookingForAJobDescription": null | string
    "fullName": string
    "userId": number
    "photos": {
        "small": null | string
        "large": null | string
    }
}

type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
    profile: null | ProfileType
}

type FriendsType = {
    id: number
    name: string
}

type SidebarType = {
    friends: FriendsType[]
}

type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: SidebarType
}


export type ActionsType = DialogsActionsType & ProfileActionsType

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
            newPostText: 'it-kamasutra',
            profile: null
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
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber();

    }
}