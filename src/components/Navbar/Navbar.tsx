import s from './Navbar.module.css';
import React from 'react';
import {NavLink} from 'react-router-dom';
import {FriendsContainer} from '../Friends/FriendsContainer';

type PropsType = {}
export const Navbar: React.FC<PropsType> = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li>
                    <NavLink to="/profile" activeClassName={s.link_active} className={s.link}
                             href="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs" activeClassName={s.link_active} className={s.link}>Messages</NavLink>
                </li>
                <li>
                    <NavLink to="/news" activeClassName={s.link_active} className={s.link}>News</NavLink>
                </li>
                <li>
                    <NavLink to="/music" activeClassName={s.link_active} className={s.link}>Music</NavLink>
                </li>
                <li>
                    <NavLink to="/settings" activeClassName={s.link_active} className={s.link}>Settings</NavLink>
                </li>
            </ul>
            <FriendsContainer />
        </nav>
    );
};