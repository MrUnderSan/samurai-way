import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {messagesReducer} from './messages-reducer';
import {sidebarReducer} from './sidebar-reducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    sidebar: sidebarReducer
})

export const store = createStore(reducers)