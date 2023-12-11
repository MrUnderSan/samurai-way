import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';

type AddPostAT = ReturnType<typeof addPost>


type SetUserProfileAT = ReturnType<typeof setUserProfileAC>

type SetUserStatusAT = ReturnType<typeof setUserStatusAC>

export type ProfileActionsType = AddPostAT | SetUserProfileAT | SetUserStatusAT


export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileType = {
    'aboutMe': null | string
    'contacts': {
        'facebook': null | string
        'website': null | string
        'vk': null | string
        'twitter': null | string
        'instagram': null | string
        'youtube': null | string
        'github': null | string
        'mainLink': null | string
    },
    'lookingForAJob': boolean
    'lookingForAJobDescription': null | string
    'fullName': string
    'userId': number
    'photos': {
        'small': null | string
        'large': null | string
    }
}

export type ProfilePageType = {
    posts: PostsType[]
    profile: null | ProfileType
    status: string
}

const initState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Its my first post', likesCount: 20},
        {id: 2, message: 'Yo!', likesCount: 10}
    ],
    profile: null,
    status: 'enter your status'
}

export const profileReducer = (state: ProfilePageType = initState, action: ProfileActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {
                id: state.posts.length + 1,
                message: action.payload.message,
                likesCount: 0,
            };
            return {...state, posts: [...state.posts, newPost]}
        }
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.payload.profile}
        }
        case 'SET-USER-STATUS': {
            return {...state, status: action.payload.status}
        }
        default:
            return state
    }
}

export const addPost = (message: string) => {
    return {
        type: 'ADD-POST' as const,
        payload: {message}
    }
}

export const setUserProfileAC = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE' as const,
        payload: {profile}
    }
}

export const setUserStatusAC = (status: string) => {
    return {
        type: 'SET-USER-STATUS' as const,
        payload: {status}
    }
}

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getUserProfile(userId)
        .then(res => {
            dispatch(setUserProfileAC(res.data))
        })
}

export const getUserStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getUserStatus(userId)
        .then(res => {
            res.data && dispatch(setUserStatusAC(res.data))
        })
}
export const updateUserStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateUserStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserStatusAC(status))
            }
        })
}