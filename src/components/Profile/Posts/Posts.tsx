import {Post} from './Post/Post';
import React, {createRef} from 'react';
import {PostsType} from '../../../App';

type PropsType = {
    posts: PostsType[]
}

export const Posts: React.FC<PropsType> = ({posts}) => {

    const newPostElement = createRef<HTMLTextAreaElement>();

    const postsElements = posts.map(p => (
        <Post id={p.id} message={p.message} likeCount={p.likeCount}/>
    ))

    const addPost = () => {
        if(newPostElement.current) {
            alert(newPostElement.current.value)
        }
    }

    return (

        <div>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
                </div>
                <button onClick={addPost}>add post</button>
            </div>
            <h3>my post:</h3>
            {postsElements}
        </div>
    );
};