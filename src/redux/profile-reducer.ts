import {ActionsType} from './store';
import {ProfilePageType} from '../components/Profile/Posts/Posts';



const initState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Its my first post', likesCount: 20},
        {id: 2, message: 'Yo!', likesCount: 10}
    ],
    newPostText: 'it-kamasutra'
}

export const profileReducer = (state: ProfilePageType = initState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0,
            };
            return {...state, posts: [...state.posts, newPost] }
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {...state, newPostText: action.payload.newPostText}
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