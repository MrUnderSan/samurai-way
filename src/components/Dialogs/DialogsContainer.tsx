import {addMessage} from '../../redux/dialogs-reducer';
import {Dialogs, DialogsType, MessagesType} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {compose, Dispatch} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {ComponentType} from 'react';

type MapStateToPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

type MapDispatchToPropsType = {
    addMessage: (message: string) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addMessage: (message: string) => {
            dispatch(addMessage(message))
        }
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)