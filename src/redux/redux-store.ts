import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {messagesReducer} from './messages-reducer';
import {sidebarReducer} from './sidebar-reducer';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer
})

export type AppStateType = ReturnType<typeof rootReducer >

export const store = createStore(rootReducer)