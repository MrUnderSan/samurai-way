import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import {Settings} from './components/Settings/Settings';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import React from 'react';
import {ActionsType} from './redux/store';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type MessagesPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostsType[],
    newPostText: string
}

export type FriendsType = {
    id: number
    name: string
}

export type SidebarType = {
    friends: FriendsType[]
}

export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: SidebarType
}

type PropsType = {
    state: StateType
    dispatch: (action: ActionsType) => void
}

const App: React.FC<PropsType> = (
    {
        state, dispatch
    }) => {

    const {profilePage, messagesPage, sidebar} = state

    return (

        <div className="app-wrapper">

            <Header/>
            <Navbar state={sidebar}/>
            <div className="app-wrapper-content">
                <Route exact path="/profile" render={() =>
                    <Profile
                        state={profilePage}
                        dispatch={dispatch}
                    />}/>
                <Route exact path="/dialogs" render={() =>
                    <DialogsContainer
                        state={messagesPage}
                        dispatch={dispatch}
                    />}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/music" component={Music}/>
                <Route exact path="/settings" component={Settings}/>
            </div>

        </div>

    )
}

export default App