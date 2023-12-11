import {addPost, ProfilePageType} from '../../../redux/profile-reducer';
import {Posts} from './Posts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    state: ProfilePageType
}

type MapDispatchToPropsType = {
    addPost: (message: string) =>  void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        state: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (message: string) => {
            dispatch(addPost(message))
        }
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)