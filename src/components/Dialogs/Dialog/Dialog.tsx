import s from './Dialog.module.css';
import {NavLink} from 'react-router-dom';

type DialogPropsType = {
    name: string
    id: number
    active?: boolean
}
export const Dialog = (props: DialogPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>
                <img className={s.dialogImg} src="https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper-thumbnail.png" alt="avatar"/>
                {props.name}
            </NavLink>
        </div>
    )
}