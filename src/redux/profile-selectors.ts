import {AppStateType} from './redux-store';

export const getProfile = (state: AppStateType) => state.profilePage.profile
export const getStatus = (state: AppStateType) => state.profilePage.status
