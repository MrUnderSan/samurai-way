import React from 'react';
import {Header} from './Header';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {logout} from '../../redux/auth-reducer';
import {getIsAuth, getLogin} from '../../redux/auth-selectors';

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType> {

    render() {
        return <Header {...this.props} />
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    logout: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    login: getLogin(state),
    isAuth: getIsAuth(state)
})

export default connect(mapStateToProps, {logout})(HeaderContainer)