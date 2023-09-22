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

type StateType = {
    profilePage: {
        posts: PostsType[]
    }
    messagesPage: {
        dialogs: DialogsType[]
        messages: MessagesType[]
    }
    sidebar: {
        friends: FriendsType[]
    }
}

type PropsType = {
    state: StateType
    addPost: (postMessage: string) => void
}

const App: React.FC<PropsType> = ({state, addPost}) => {

    const {profilePage, messagesPage, sidebar} = state

    return (

            <div className="app-wrapper">

                <Header/>
                <Navbar state={sidebar} />
                <div className="app-wrapper-content">
                    <Route exact path="/profile" render={()=><Profile state={profilePage} addPost={addPost} />}/>
                    <Route exact path="/dialogs" render={()=><Dialogs state={messagesPage}/>} />
                    <Route exact path="/news" component={News}/>
                    <Route exact path="/music" component={Music}/>
                    <Route exact path="/settings" component={Settings}/>

                </div>

            </div>

    );
};

export default App;