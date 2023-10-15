import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import {Settings} from './components/Settings/Settings';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import React from 'react';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

type PropsType = {}

const App: React.FC<PropsType> = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route exact path="/profile" render={() =>
                    <Profile/>}/>
                <Route exact path="/dialogs" render={() =>
                    <DialogsContainer/>}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/music" component={Music}/>
                <Route exact path="/settings" component={Settings}/>
            </div>
        </div>
    )
}

export default App