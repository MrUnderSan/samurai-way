import s from './ProfileInfo.module.css';
import React from 'react';
import {ProfileType} from '../../../redux/profile-reducer';
import {Preloader} from '../../common/Preloader/Preloader';

type ProfileInfoPropsType = {
    imgSrc: string
    description: string
    profile: ProfileType | null
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (

        !props.profile
            ? <Preloader/>
            : <div>
                <div>
                    <img className={s.banner}
                         src="https://upload.wikimedia.org/wikipedia/ru/1/1d/%D0%91%D0%B5%D0%B7%D0%BC%D1%8F%D1%82%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C.png"
                         alt="banner"/>
                </div>
                <img className={s.avatar}
                     src={props.profile.photos.large ? props.profile.photos.large : props.imgSrc}
                     alt="avatar"/>
                <div>{props.profile.aboutMe}</div>
            </div>
    )
}