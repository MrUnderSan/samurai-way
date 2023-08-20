import s from './Dialogs.module.css';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.dialog_active}>Dimych</div>
                <div className={s.dialog}>Andrey</div>
                <div className={s.dialog}>Sveta</div>
                <div className={s.dialog}>Sasha</div>
                <div className={s.dialog}>Viktor</div>
                <div className={s.dialog}>Valera</div>
            </div>
            <div className={s.mesages}>
                <div className={s.message}>Fine, tnx</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Hello!</div>
                <div className={s.message}>Yo!</div>
            </div>
        </div>
    );
};