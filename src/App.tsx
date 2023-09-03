import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
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
    likeCount: number
}

type DataType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    posts: PostsType[]
}

type PropsType = {
    data: DataType
}

const App: React.FC<PropsType> = ({data}) => {

    const {dialogs, messages, posts} = data

    return (
        <BrowserRouter>
            <div className="app-wrapper">

                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route exact path="/profile" render={()=><Profile posts={posts} />}/>
                    <Route exact path="/dialogs" render={()=><Dialogs dialogs={dialogs} messages={messages}/>} />
                    <Route exact path="/news" component={News}/>
                    <Route exact path="/music" component={Music}/>
                    <Route exact path="/settings" component={Settings}/>

                </div>

            </div>
        </BrowserRouter>
    );
};

export default App;