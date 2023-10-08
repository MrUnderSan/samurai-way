import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {Settings} from './components/Settings/Settings';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import React from 'react';
import {ActionsType} from './redux/state';

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type FriendsType = {
    id: number
    name: string
}

export type StateType = {
    profilePage: {
        posts: PostsType[],
        newPostText: string
    }
    messagesPage: {
        dialogs: DialogsType[]
        messages: MessagesType[]
        newMessageText: string
    }
    sidebar: {
        friends: FriendsType[]
    }
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
                    <Dialogs
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