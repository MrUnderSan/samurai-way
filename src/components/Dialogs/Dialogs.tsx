import s from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <Dialog id="1" name="Dimych"/>
                <Dialog id="2" name="Andrey"/>
                <Dialog id="3" name="Sveta"/>
                <Dialog id="4" name="Sasha"/>
                <Dialog id="5" name="Viktor"/>
                <Dialog id="6" name="Valera"/>

            </div>
            <div className={s.mesages}>
                <Message message="Fine, tnx"/>
                <Message message="How are you?"/>
                <Message message="Hello!"/>
                <Message message="Yo!"/>
            </div>
        </div>
    );
};