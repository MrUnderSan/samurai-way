import {Dispatch} from 'redux';
import {usersAPI} from '../api/api';

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
    followingInProgress: string[]
}

type ActionsType =
    | FollowType
    | UnfollowType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUsersCountType
    | ToggleIsFetchingType
    | ToggleFollowingProgressType

const initState: UsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
        case 'TOGGLE-FOLLOWING-PROGRESS':
            return {
                ...state,
                followingInProgress:
                    action.followingInProgress
                        ? [...state.followingInProgress, action.id]
                        : state.followingInProgress.filter(id => id !== action.id)
            }
        default:
            return state
    }
}

export const followAC = (userId: string) => ({type: 'FOLLOW' as const, userId})

type FollowType = ReturnType<typeof followAC>

export const unfollowAC = (userId: string) => ({type: 'UNFOLLOW' as const, userId})

type UnfollowType = ReturnType<typeof unfollowAC>

export const setUsers = (users: UserType[]) => ({type: 'SET-USERS' as const, users})

type SetUsersType = ReturnType<typeof setUsers>

export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE' as const, currentPage})

type SetCurrentPageType = ReturnType<typeof setCurrentPage>

export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'SET-TOTAL-USERS-COUNT' as const,
    totalUsersCount
})

type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>

export const toggleIsFetching = (isFetching: boolean) => ({
    type: 'TOGGLE-IS-FETCHING' as const, isFetching
})

type ToggleIsFetchingType = ReturnType<typeof toggleIsFetching>

export const toggleFollowingProgress = (followingInProgress: boolean, id: string) => ({
    type: 'TOGGLE-FOLLOWING-PROGRESS' as const, followingInProgress, id
})

type ToggleFollowingProgressType = ReturnType<typeof toggleFollowingProgress>


export const fetchUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    toggleIsFetching(true)
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount > 50 ? 50 : data.totalCount))
            dispatch(setCurrentPage(currentPage))
        })
}

export const follow = (userId: string) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.follow(userId)
        .then(res => {
            res.data.resultCode === 0 &&
            dispatch(followAC(userId))
            dispatch(toggleFollowingProgress(false, userId))
        })
}

export const unfollow = (userId: string) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.unfollow(userId)
        .then(res => {
            res.data.resultCode === 0 &&
            dispatch(unfollowAC(userId))
            dispatch(toggleFollowingProgress(false, userId))
        })
}

