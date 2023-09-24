import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App, {StateType} from './App';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './redux/state';
import React from 'react';

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                updateNewMessageText={updateNewMessageText}
                addMessage={addMessage}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}