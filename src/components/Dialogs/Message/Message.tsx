import s from './Message.module.css';

type MessagePropsType = {
    id: number
    message: string
}
export const Message = (props: MessagePropsType) => {

    const formatMessage = props.id % 2 === 0 ? s.messageToMe : s.messageMy


    return (
        <span className={`${s.message} ${formatMessage}`}>{props.message}</span>
    )
}