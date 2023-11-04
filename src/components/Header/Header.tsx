import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {FC} from 'react';

type PropsType = {
    login: string | null
    isAuth: boolean
}

export const Header: FC<PropsType> = (props) => {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <span>{props.login}</span>
                    : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    );
};