import {Dispatch} from 'redux';
import {authAPI, LoginBodyType} from '../api/api';
import {AppThunk} from './redux-store';

export type AuthDataType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

const initState: AuthDataType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state = initState, action: AuthActionsType): AuthDataType => {
    switch (action.type) {
        case 'AUTH/SET-USER-DATA':
            return {...state, ...action.payload.data, isAuth: true}
        case 'AUTH/LOGOUT':
            return {
                ...state,
                id: null,
                login: null,
                email: null,
                isAuth: false
            }
        default:
            return state
    }
}

export const setAuthUserDataAC = (data: AuthDataType) => {
    return {
        type: 'AUTH/SET-USER-DATA' as const,
        payload: {data}
    }
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    return authAPI.getUserData()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(res.data.data))
            }
        }).catch(e=> {
            alert(e.message)
        })
}

export const login = (body: LoginBodyType): AppThunk => dispatch => {
    authAPI.login(body)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                alert(res.data.messages[0])
            }
        })
}

export const logout = (): AppThunk => dispatch => {
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(logoutAC())
            } else {
                alert(res.data.messages[0])
            }
        })
}

export const loginAC = (userId: number) => ({
    type: 'AUTH/LOGIN',
    userId
} as const)

export const logoutAC = () => ({
    type: 'AUTH/LOGOUT'
} as const)


export type AuthActionsType =
    | ReturnType<typeof setAuthUserDataAC>
    | ReturnType<typeof loginAC>
    | ReturnType<typeof logoutAC>
