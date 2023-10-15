import s from './Friends.module.css';
import React from 'react';

export type FriendsType = {
    id: number
    name: string
}

type PropsType = {
    state: FriendsType[]
}
export const Friends: React.FC<PropsType> = ({state}) => {
    const friendsItems = state.map(f => (
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