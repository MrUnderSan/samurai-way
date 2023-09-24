import {rerenderEntireTree} from '../render';
import {StateType} from '../App';

export const state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Its my first post', likesCount: 20},
            {id: 2, message: 'Yo!', likesCount: 10}
        ]
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
        ]
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
        ]
    }

}

export const addPost = (postMessage: string) => {
    const newPost = {id: 5, message: postMessage, likesCount: 0}
    state.profilePage.posts.push(newPost)

    rerenderEntireTree(state)
}