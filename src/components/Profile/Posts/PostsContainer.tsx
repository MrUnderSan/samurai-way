import {addPost, updateNewPostText} from '../../../redux/profile-reducer';
import {Posts, ProfilePageType} from './Posts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    state: ProfilePageType
}

type MapDispatchToPropsType = {
    addPost: () =>  void
    updateNewPostText: (text: string) =>  void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        state: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPost())
            dispatch(updateNewPostText(''))
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostText(text))
        }
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)