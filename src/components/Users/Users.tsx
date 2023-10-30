import {UsersStateType, UserType} from '../../redux/users-reducer';
import styles from './Users.module.css'
import axios from 'axios';
import userPhoto from '../../assets/images/user.jpg'
import React from 'react';

type PropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
} & UsersStateType

class Users extends React.Component<PropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.setTotalUsersCount(res.data.totalCount > 50 ? 50 : res.data.totalCount)
            })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
            })
    }

    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                {pages.map(p =>
                    <span
                        className={this.props.currentPage === p ? styles.selectedPage : ''}
                        onClick={() => {
                            this.onPageChanged(p)
                        }}
                    >{p}</span>
                )}
                {this.props.users.map(u => (
                    <div key={u.id}>
                          <span>
                            <div>
                              <img src={u.photos.small ? u.photos.small : userPhoto} alt="avatar"
                                   className={styles.userPhoto}/>
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
                    </div>
                ))}
            </div>
        )
    }
}

export default Users