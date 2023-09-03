import s from './Posts.module.css';
import {Post} from './Post/Post';
import React from 'react';

type PostType = {
    id: number
    message: string
    likeCount: number
}

type PropsType = {
    posts: PostType[]
}

export const Posts: React.FC<PropsType> = (props) => {

    const postsElements = props.posts.map(p => (
        <Post id={p.id} message={p.message} likeCount={p.likeCount}/>
    ))

    return (
        <div>
            <h3>my post:</h3>
            {postsElements}
        </div>
    );
};