import {Post} from './Post/Post';
import React, {createRef} from 'react';
import {PostsType} from '../../../App';
import {ActionsType} from '../../../redux/state';
import {addPost, updateNewPostText} from '../../../redux/profile-reducer';

type PropsType = {
    posts: PostsType[]
    newPostValue: string
    dispatch: (action: ActionsType) => void
}

export const Posts: React.FC<PropsType> = (
    {
        posts, newPostValue, dispatch
    }) => {

    const newPostElement = createRef<HTMLTextAreaElement>();

    const postsElements = posts.map(p => (
        <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>
    ))

    const addPostHandler = () => {
        dispatch(addPost())
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            dispatch(updateNewPostText(newPostElement.current.value))
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
