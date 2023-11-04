type AddPostAT = ReturnType<typeof addPost>

type UpdateNewPostTextAT = ReturnType<typeof updateNewPostText>

type SetUserProfileAT = ReturnType<typeof setUserProfile>

export type ProfileActionsType = AddPostAT | UpdateNewPostTextAT | SetUserProfileAT


export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileType = {
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

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
    profile: null | ProfileType
}

const initState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Its my first post', likesCount: 20},
        {id: 2, message: 'Yo!', likesCount: 10}
    ],
    newPostText: 'it-kamasutra',
    profile: null
}

export const profileReducer = (state: ProfilePageType = initState, action: ProfileActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {
                id: state.posts.length + 1,
                message: action.payload.message,
                likesCount: 0,
            };
            return {...state, posts: [...state.posts, newPost] }
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {...state, newPostText: action.payload.newPostText}
        }
        case 'SET-USER-PROFILE': {
            return {...state, profile: action.payload.profile}
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

export const updateNewPostText = (newPostText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT' as const,
        payload: {newPostText}
    }
}

export const setUserProfile = (profile: any) => {
    return {
        type: 'SET-USER-PROFILE' as const,
        payload: {profile}
    }
}