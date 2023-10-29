import {UserType} from '../../redux/users-reducer';
import styles from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/images/user.jpg'
import React from 'react';

type PropsType = {
    users: UserType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

class Users extends React.Component<PropsType> {

    constructor(props: Readonly<PropsType>) {
        super(props)
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        return (
            <div>
            {this.props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photos.small ? u.photos.small : userPhoto} alt="avatar" className={styles.userPhoto}/>
            </div>
            <div>
              {
                  u.followed
                      ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                      : <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
                </div>)}
            </div>
        )
    }
}

export default Users