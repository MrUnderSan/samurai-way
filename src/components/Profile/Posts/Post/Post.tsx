import s from './Post.module.css';
import React from 'react';

type PostPropsType = {
    id: number
    message: string
    likeCount: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div>
            <img className={s.avatar}
                 src="https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png"
                 alt="avatar"/>
            {props.message}
            <div>
                <span>like</span>
                <span className={s.likeCount}>{props.likeCount}</span>
            </div>
        </div>
    );
};