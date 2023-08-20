import s from './Dialog.module.css';
import {NavLink} from 'react-router-dom';

type DialogPropsType = {
    name: string
    id: string
    active?: boolean
}
export const Dialog = (props: DialogPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}