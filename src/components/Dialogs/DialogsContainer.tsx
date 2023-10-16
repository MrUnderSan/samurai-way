import {addMessage, updateNewMessageText} from '../../redux/dialogs-reducer';
import {Dialogs, DialogsType, MessagesType} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}

type MapDispatchToPropsType = {
    addMessage: (message: string) => void
    updateNewMessageText: (text: string) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: (message: string) => {
            dispatch(addMessage(message))
        },
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageText(text))
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)