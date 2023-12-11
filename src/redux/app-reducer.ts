import {getAuthUserData} from './auth-reducer';
import {AppThunk} from './redux-store';

export type AppDataType = {
    initialized: boolean
}

const initState: AppDataType = {
    initialized: false
}

export const appReducer = (state = initState, action: AuthActionsType): AppDataType => {
    switch (action.type) {
        case 'APP/SET-INIT':
            return {...state, initialized: action.payload.initialized}
        default:
            return state
    }
}

const setInitAC = (initialized: boolean) => {
    return {
        type: 'APP/SET-INIT' as const,
        payload: {initialized}
    }
}

export const initializeApp = (): AppThunk => (dispatch) => {
    dispatch(getAuthUserData()).then(()=> {
        dispatch(setInitAC(true))
    })
}

export type AuthActionsType =
    | ReturnType<typeof setInitAC>
