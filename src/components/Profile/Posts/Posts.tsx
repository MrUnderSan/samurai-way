import {Post} from './Post/Post';
import React, {createRef} from 'react';

type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: PostsType[],
    newPostText: string
}

type PropsType = {
    state: ProfilePageType
    addPost: (message: string) => void
    updateNewPostText: (text: string) => void
}

export const Posts: React.FC<PropsType> = (
    {
        state, addPost, updateNewPostText
    }) => {

    const newPostElement = createRef<HTMLTextAreaElement>();

    const postsElements = state.posts.map(p => (
        <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>
    ))

    const addPostHandler = () => {
        addPost(state.newPostText)
        updateNewPostText('')
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
                        value={state.newPostText}
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
