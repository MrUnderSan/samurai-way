import {Post} from './Post/Post';
import React, {createRef} from 'react';
import {PostsType} from '../../../App';

type PropsType = {
    posts: PostsType[]
    addPost: (postMessage: string) => void
}

export const Posts: React.FC<PropsType> = ({posts, addPost}) => {

    const newPostElement = createRef<HTMLTextAreaElement>();

    const postsElements = posts.map(p => (
        <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>
    ))

    const addPostHandler = () => {
        if(newPostElement.current) {
            addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }

    return (

        <div>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
                </div>
                <button onClick={addPostHandler}>add post</button>
            </div>
            <h3>my post:</h3>
            {postsElements}
        </div>
    );
};
