import {Post} from './Post/Post';
import React, {createRef} from 'react';
import {PostsType} from '../../../App';

type PropsType = {
    posts: PostsType[]
    newPostValue: string
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export const Posts: React.FC<PropsType> = (
    {
        posts, newPostValue, addPost, updateNewPostText
    }) => {

    const newPostElement = createRef<HTMLTextAreaElement>();

    const postsElements = posts.map(p => (
        <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>
    ))

    const addPostHandler = () => {
        addPost()
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            updateNewPostText(newPostElement.current.value)
        }
    }

    return (
        <div>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={newPostValue}
                        onChange={onPostChange}
                    />
                </div>
                <button onClick={addPostHandler}>add post</button>
            </div>
            <h3>my post:</h3>
            {postsElements}
        </div>
    );
};
