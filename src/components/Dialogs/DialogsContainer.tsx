import {addMessage, updateNewMessageText} from '../../redux/messages-reducer';
import {Dialogs, DialogsPageType} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    state: DialogsPageType
}

type MapDispatchToPropsType = {
    addMessage: () => void
    updateNewMessageText: (text: string) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        state: state.messagesPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessage())
            dispatch(updateNewMessageText(''))
        },
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageText(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)