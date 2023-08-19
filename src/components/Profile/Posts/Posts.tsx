import s from './Posts.module.css';
import {Post} from './Post/Post';

export const Posts = () => {
    return (
        <div>
            my post
            <Post message={'How are you'} likeCount={10}/>
            <Post message={'Its my first post'} likeCount={20}/>
        </div>
    );
};