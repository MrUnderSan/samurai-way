import {StateType} from '../App';

let rerenderEntireTree = () => {}

export const state: StateType = {
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

}

export const addPost = () => {
    const newPost = {id: 5, message: state.profilePage.newPostText, likesCount: 0}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree()
}


export const updateNewPostText = (newPostText: string) => {
    state.profilePage.newPostText = newPostText

    rerenderEntireTree()
}

export const updateNewMessageText = (newMessageText: string) => {
    state.messagesPage.newMessageText = newMessageText

    rerenderEntireTree()
}

export const addMessage = () => {
    const newMessage =  {id: state.messagesPage.messages.length + 1, message: state.messagesPage.newMessageText}
    state.messagesPage.messages.push(newMessage)
    state.messagesPage.newMessageText = ''
    rerenderEntireTree()
}

export const subscribe = (observer: () => void)  => {
    rerenderEntireTree = observer
}