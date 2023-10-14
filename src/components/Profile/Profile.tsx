import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostsType} from '../../App';
import React from 'react';
import {ActionsType} from '../../redux/store';
import {PostsContainer} from './Posts/PostsContainer';

export type StateType = {
    posts: PostsType[]
    newPostText: string
}

type PropsType = {
    state: StateType
    dispatch: (action: ActionsType) => void
}
export const Profile: React.FC<PropsType> = ({state, dispatch}) => {

    return (
        <div className={s.content}>
            <div>
                <img className={s.banner}
                     src="https://upload.wikimedia.org/wikipedia/ru/1/1d/%D0%91%D0%B5%D0%B7%D0%BC%D1%8F%D1%82%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C.png"
                     alt="banner"/>
            </div>
            <ProfileInfo imgSrc="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                         description="description"/>
            <PostsContainer state={state} dispatch={dispatch}/>
        </div>
    );
};