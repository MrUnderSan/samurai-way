import {Post} from './Post/Post';
import React from 'react';
import {PostsType} from '../../../App';

type PropsType = {
    posts: PostsType[]
}

export const Posts: React.FC<PropsType> = ({posts}) => {

    const postsElements = posts.map(p => (
        <Post id={p.id} message={p.message} likeCount={p.likeCount}/>
    ))

    return (
        <div>
            <h3>my post:</h3>
            {postsElements}
        </div>
    );
};