import React from 'react';
import {Header} from './Header';
import axios from 'axios';
import {AppStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import {AuthDataType, setAuthUserData} from '../../redux/auth-reducer';

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(res => {
                res.data.resultCode === 0 &&
                this.props.setAuthUserData(res.data.data)
            })
    }

    render() {
        return <Header {...this.props} />
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    setAuthUserData: (authData: AuthDataType) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)