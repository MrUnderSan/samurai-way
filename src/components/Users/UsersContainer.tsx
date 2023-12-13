import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {
    fetchUsers,
    follow,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow,
    UsersStateType
} from '../../redux/users-reducer';
import React, {ComponentType} from 'react';
import Users from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../redux/users-selectors';

type PropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress: (followingInProgress: boolean, id: string) => void
    fetchUsers: (currentPage: number, pageSize: number) => void
} & UsersStateType

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.fetchUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (currentPage: number) => {
        this.props.fetchUsers(currentPage, this.props.pageSize)
    }

    render() {
        return (
            this.props.isFetching
                ? <Preloader/>
                : <Users
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    followingInProgress={this.props.followingInProgress}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                />
        )
    }
}

type MapStateToPropsType = UsersStateType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        fetchUsers
    }),
    withAuthRedirect
)(UsersContainer)