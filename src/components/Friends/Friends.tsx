import s from './Friends.module.css';
import React from 'react';
import {FriendsType} from '../../App';

type PropsType = {
    friends: FriendsType[]
}
export const Friends: React.FC<PropsType> = ({friends}) => {
    const friendsItems = friends.map(f => (
        <div className={s.friend} key={f.id}>
            <img className={s.friendsImg}
                 src="https://img.favpng.com/11/20/6/ninja-computer-icons-avatar-samurai-png-favpng-mJeFV4xf9mPrz2cwALkbspCd4.jpg"
                 alt="avatar"/>
            <div>{f.name}</div>

        </div>
    ))

    return (
        <div className={s.friends}>
            <h2>Friends:</h2>
            <div className={s.friendsItems}>{friendsItems}</div>
        </div>
    );
};