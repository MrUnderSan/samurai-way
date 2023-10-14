import {ActionsType} from './store';
import {ProfilePageType} from '../App';

const initState = {
    posts: [
        {id: 1, message: 'Its my first post', likesCount: 20},
        {id: 2, message: 'Yo!', likesCount: 10}
    ],
    newPostText: 'it-kamasutra'
}

export const profileReducer = (state: ProfilePageType = initState, action: ActionsType) => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        }
        case 'UPDATE-NEW-POST-TEXT': {
            state.newPostText = action.payload.newPostText;
            return state
        }
        default:
            return state
    }
}

export const addPost = () => {
    return {
        type: 'ADD-POST' as const
    }
}

export const updateNewPostText = (newPostText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT' as const,
        payload: {newPostText}
    }
}