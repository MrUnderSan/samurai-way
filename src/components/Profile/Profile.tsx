import s from './Profile.module.css';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import React from 'react';
import {PostsContainer} from './Posts/PostsContainer';
import {ProfileType} from '../../redux/profile-reducer';

type PropsType = {
    profile: ProfileType | null
}
export const Profile: React.FC<PropsType> = ({profile}) => {

    return (
        <div className={s.content}>

            <ProfileInfo
                imgSrc="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                description="description"
                profile={profile}
            />
            <PostsContainer/>
        </div>
    );
};