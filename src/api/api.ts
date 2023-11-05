import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'api-key': 'bde9abe2-6298-40ef-b9d3-8bd4f4bd5d6a'
    }
})
export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 3) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    }
}

export const followAPI = {
    follow(userId: string) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: string) {
        return instance.delete(`follow/${userId}`)
    }
}