import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import {Settings} from './components/Settings/Settings';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import React, {Component} from 'react';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import {Login} from './components/Login/Login';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {connect} from 'react-redux';
import {AppStateType} from './redux/redux-store';
import {initializeApp} from './redux/app-reducer';
import {Preloader} from './components/common/Preloader/Preloader';

type Props = MapDispatchToPropsType & MapStateToPropsType

class App extends Component<Props> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) return <Preloader/>

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                        <Route path="/profile/:userId?" render={() =>
                            <ProfileContainer/>}/>
                        <Route exact path="/dialogs" render={() =>
                            <DialogsContainer/>}/>
                        <Route exact path="/users" render={() =>
                            <UsersContainer/>}/>
                        <Route exact path="/login" render={() =>
                            <Login/>}/>
                        <Route exact path="/news" component={News}/>
                        <Route exact path="/music" component={Music}/>
                        <Route exact path="/settings" component={Settings}/>
                </div>
            </div>
        )
    }
}

type MapStateToPropsType = {
    initialized: boolean
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App)