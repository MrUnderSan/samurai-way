import {Post} from './Post/Post';
import {FC} from 'react';
import {ProfilePageType} from '../../../redux/profile-reducer';
import {NewPostForm} from './NewPostForm/NewPostForm';


type PropsType = {
    state: ProfilePageType
    addPost: (message: string) => void
}

export const Posts: FC<PropsType> = (
    {
        state, addPost
    }) => {

    const postsElements = state.posts.map(p => (
        <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>
    ))

    return (
        <div>
            < NewPostForm onSubmit={addPost}/>
            <h3>my post:</h3>
            {postsElements}
        </div>
    );
};
