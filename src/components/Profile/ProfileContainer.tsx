import React, {ComponentType} from 'react';
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, getUserStatus, ProfileType, updateUserStatus} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {getAuthUserId, getIsAuth} from '../../redux/auth-selectors';
import {getProfile, getStatus} from '../../redux/profile-selectors';

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let id = +this.props.match.params.userId
        !id && this.props.authUserId && (id = this.props.authUserId)

        this.props.getUserProfile(id)
        this.props.getUserStatus(id)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                        updateUserStatus={this.props.updateUserStatus}/>
    }
}

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authUserId: number | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void
    getUserStatus: (userId: number) => void
    updateUserStatus: (status: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: getProfile(state),
    status: getStatus(state),
    authUserId: getAuthUserId(state),
    isAuth: getIsAuth(state)
})

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)