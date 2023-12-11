import s from './Header.module.css';
import {NavLink} from 'react-router-dom';
import {FC} from 'react';

type PropsType = {
    login: string | null
    isAuth: boolean
    logout: () => void
}

export const Header: FC<PropsType> = (props) => {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>
                        <span>{props.login}</span>
                        ---
                        <button onClick={props.logout}>logout</button>
                </div>
                    : <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    );
};