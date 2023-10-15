import {connect} from 'react-redux';
import {Friends, FriendsType} from './Friends';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    state: FriendsType[]
}

type MapDispatchToPropsType = {

}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        state: state.sidebar.friends
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {

    }
}
export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)