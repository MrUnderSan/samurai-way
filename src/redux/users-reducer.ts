export type UserType = {
    "name": string,
    "id": string,
    "uniqueUrlName"?: string,
    "photos": {
        "small"?: string,
        "large"?: string
    },
    "status"?: string,
    "followed": boolean
}

type UsersStateType = {
    users: UserType[]
}

type ActionsType = FollowACType | UnfollowACType | SetUsersACType

const initState: UsersStateType = {
    users: []
}

export const usersReducer = (state = initState, action: ActionsType): UsersStateType  => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userId: string) => ({type: 'FOLLOW' as const, userId})

type FollowACType = ReturnType<typeof followAC>

export const unfollowAC = (userId: string) => ({type: 'UNFOLLOW' as const, userId})

type UnfollowACType = ReturnType<typeof unfollowAC>

export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS' as const, users})

type SetUsersACType = ReturnType<typeof setUsersAC>