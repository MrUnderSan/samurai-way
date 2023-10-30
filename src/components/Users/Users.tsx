import {UsersStateType} from '../../redux/users-reducer';
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.jpg'
import React, {FC} from 'react';

type PropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    onPageChanged: (page: number) => void
} & UsersStateType

const Users: FC<PropsType> = (props) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p =>
                <span
                    className={props.currentPage === p ? styles.selectedPage : ''}
                    onClick={() => {
                        props.onPageChanged(p)
                    }}
                >{p}</span>
            )}
            {props.users.map(u => (
                <div key={u.id}>
                          <span>
                            <div>
                              <img src={u.photos.small ? u.photos.small : userPhoto} alt="avatar"
                                   className={styles.userPhoto}/>
                            </div>
                            <div>
                              {
                                  u.followed
                                      ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                      : <button onClick={() => props.follow(u.id)}>Follow</button>
                              }
                            </div>
                          </span>
                    <span>
                            <span>
                              <div>{u.name}</div>
                              <div>{u.status}</div>
                            </span>
                            <span>
                              <div>{'u.location.country'}</div>
                              <div>{'u.location.city'}</div>
                            </span>
                          </span>
                </div>
            ))}
        </div>
    )
}

export default Users