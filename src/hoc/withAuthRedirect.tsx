import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/redux-store';
import React, {ComponentType} from 'react';

type MapStateToProps = {
    isAuth: boolean
}

const MapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = <T,>(Component: ComponentType<T> ) => {

    const RedirectComponent = (props: MapStateToProps) => {
        const {isAuth, ...restProps} = props

        if (!props.isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T} />
    }

    return connect(MapStateToProps)(RedirectComponent)
}