import './index.css';
import {addMessage, addPost, state, subscribe, updateNewMessageText, updateNewPostText} from './redux/state';
import App from './App';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';

const rerenderEntireTree = () => {
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

rerenderEntireTree()

subscribe(rerenderEntireTree);