import React from 'react';
import {addPost, updateNewPostText} from '../../../redux/profile-reducer';
import {Posts} from './Posts';
import StoreContext from '../../../StoreContext';

type PropsType = {}

export const PostsContainer: React.FC<PropsType> = () => {
    return (
        <StoreContext.Consumer>
            {store => {

                const addPostHandler = () => {
                    store.dispatch(addPost())
                }

                const updateNewPostTextHandler = (text: string) => {
                    store.dispatch(updateNewPostText(text))
                }

                return <Posts
                    posts={store.getState().profilePage.posts}
                    newPostValue={store.getState().profilePage.newPostText}
                    addPost={addPostHandler}
                    updateNewPostText={updateNewPostTextHandler}
                />
            }}
        </StoreContext.Consumer>
    )
};