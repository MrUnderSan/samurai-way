import React from 'react';
import {ActionsType} from '../../../redux/store';
import {addPost, updateNewPostText} from '../../../redux/profile-reducer';
import {Posts} from './Posts';
import {StateType} from '../Profile';

type PropsType = {
    state: StateType
    dispatch: (action: ActionsType) => void
}

export const PostsContainer: React.FC<PropsType> = (
    {
        state, dispatch
    }) => {

    const addPostHandler = () => {
        dispatch(addPost())
    }

    const updateNewPostTextHandler = (text: string) => {
        dispatch(updateNewPostText(text))
    }

    return (
        <Posts
            posts={state.posts}
            newPostValue={state.newPostText}
            addPost={addPostHandler}
            updateNewPostText={updateNewPostTextHandler}
        />
    );
};
