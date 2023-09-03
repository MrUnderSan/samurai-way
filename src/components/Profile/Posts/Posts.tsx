import s from './Posts.module.css';
import {Post} from './Post/Post';

export const Posts = () => {

    let posts = [
        {id: 1, message: 'Its my first post', likeCount: 20},
        {id: 2, message: 'Yo!', likeCount: 10}
    ]

    const postsElements = posts.map(p => (
        <Post id={p.id} message={p.message} likeCount={p.likeCount}/>
    ))

    return (
        <div>
            <h3>my post:</h3>
            {postsElements}
        </div>
    );
};