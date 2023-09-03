import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const data = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],

    messages: [
        {id: 1, message: 'Yo!'},
        {id: 2, message: 'Hello!'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'Fine, tnx'}
    ],

    posts: [
        {id: 1, message: 'Its my first post', likeCount: 20},
        {id: 2, message: 'Yo!', likeCount: 10}
    ]
}

ReactDOM.render(
    <App data={{...data}}/>,
    document.getElementById('root')
);