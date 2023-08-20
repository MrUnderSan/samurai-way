import s from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';

export const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]

    let messageData = [
        {id: 1, message: 'Yo!'},
        {id: 2, message: 'Hello!'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Fine, tnx'}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog id={dialogsData[0].id} name={dialogsData[0].name}/>
                <Dialog id={dialogsData[1].id} name={dialogsData[1].name}/>
            </div>
            <div className={s.mesages}>
                <Message id={messageData[0].id} message={messageData[0].message}/>
                <Message id={messageData[1].id} message={messageData[1].message}/>
            </div>
        </div>
    );
};