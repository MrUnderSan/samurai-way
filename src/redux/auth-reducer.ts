export type AuthActionsType = SetAuthUserDataType

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
        case 'SET-USER-DATA': {
            return {...state, ...action.payload.data, isAuth: true}
        }
        default:
            return state
    }
}

export const setAuthUserData = (data: AuthDataType) => {
    return {
        type: 'SET-USER-DATA' as const,
        payload: {data}
    }
}

type SetAuthUserDataType = ReturnType<typeof setAuthUserData>
