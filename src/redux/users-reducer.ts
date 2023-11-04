export type UserType = {
    'name': string,
    'id': string,
    'uniqueUrlName'?: string,
    'photos': {
        'small'?: string,
        'large'?: string
    },
    'status'?: string,
    'followed': boolean
}

export type UsersStateType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching?: boolean
}

type ActionsType = FollowACType | UnfollowACType | SetUsersACType | SetCurrentPageACType | SetTotalUsersCountACType | ToggleIsFetchingACType

const initState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

export const usersReducer = (state = initState, action: ActionsType): UsersStateType => {
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
            return {...state, users: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.totalUsersCount}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
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

export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE' as const, currentPage})

type SetCurrentPageACType = ReturnType<typeof setCurrentPageAC>

export const setTotalUsersCountAC = (totalUsersCount: number) => ({
    type: 'SET-TOTAL-USERS-COUNT' as const,
    totalUsersCount
})

type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>

export const toggleIsFetchingAC = (isFetching: boolean) => ({
    type: 'TOGGLE-IS-FETCHING' as const, isFetching
})

type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
