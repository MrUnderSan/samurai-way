import s from './Posts.module.css';
import {Post} from './Post/Post';

export const Posts = () => {
    return (
        <div>
            my post
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};