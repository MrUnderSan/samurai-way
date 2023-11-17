import s from './ProfileInfo.module.css';
import React from 'react';
import {ProfileType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';
import ProfileStatus from '../ProfileStatus/ProfileStatus';

type ProfileInfoPropsType = {
    imgSrc: string
    description: string
    profile: ProfileType | null
    status: string
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (

        !props.profile
            ? <Preloader/>
            : <div>
                <img className={s.avatar}
                     src={props.profile.photos.large ? props.profile.photos.large : props.imgSrc}
                     alt="avatar"/>
                <div>{props.profile.aboutMe}</div>
                <ProfileStatus status={props.status} />
            </div>
    )
}