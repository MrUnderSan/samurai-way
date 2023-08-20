import s from './Posts.module.css';
import {Post} from './Post/Post';

export const Posts = () => {

    let postsData = [
        {id: 1, message: 'Its my first post', likeCount: 20},
        {id: 2, message: 'Yo!', likeCount: 10}
    ]

    return (
        <div>
            my post

            <Post id={postsData[0].id} message={postsData[0].message} likeCount={postsData[0].likeCount}/>
            <Post id={postsData[1].id} message={postsData[1].message} likeCount={postsData[1].likeCount}/>
        </div>
    );
};