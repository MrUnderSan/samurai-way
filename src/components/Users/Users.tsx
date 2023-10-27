import {UserType} from '../../redux/users-reducer';
import styles from './Users.module.css'

type PropsType = {
    users: UserType[]
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

export const Users = (props: PropsType) => {

    if (!props.users.length) {
        props.setUsers(
            [
                {
                    id: '1',
                    photoUrl: 'https://img.favpng.com/11/20/6/ninja-computer-icons-avatar-samurai-png-favpng-mJeFV4xf9mPrz2cwALkbspCd4.jpg',
                    followed: true,
                    fullName: 'Sasha',
                    status: 'I am boss',
                    location: {
                        city: 'Minsk',
                        country: 'Belarus'
                    }
                },
                {
                    id: '2',
                    photoUrl: 'https://img.favpng.com/11/20/6/ninja-computer-icons-avatar-samurai-png-favpng-mJeFV4xf9mPrz2cwALkbspCd4.jpg',
                    followed:
                        false,
                    fullName:
                        'Dmitry',
                    status:
                        'I am boss',
                    location:
                        {
                            city: 'Moscow',
                            country:
                                'Russia'
                        }
                }
                ,
                {
                    id: '3',
                    photoUrl: 'https://img.favpng.com/11/20/6/ninja-computer-icons-avatar-samurai-png-favpng-mJeFV4xf9mPrz2cwALkbspCd4.jpg',
                    followed:
                        true,
                    fullName:
                        'Nikolay',
                    status:
                        'I am boss',
                    location:
                        {
                            city: 'Kiev',
                            country:
                                'Ukraine'
                        }
                }
            ]
        )
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} alt="avatar" className={styles.userPhoto}/>
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
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
            </div>)}
        </div>
    )
}