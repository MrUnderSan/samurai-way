import s from './Header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="logo"/>
        </header>
    );
};