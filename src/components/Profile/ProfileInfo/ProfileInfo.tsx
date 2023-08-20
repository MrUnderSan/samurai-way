import s from './ProfileInfo.module.css';

type ProfileInfoPropsType = {
    imgSrc: string
    description: string
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <img className={s.avatar}
                 src={props.imgSrc}
                 alt="avatar"/>
            <div>{props.description}</div>
        </div>
    )
}