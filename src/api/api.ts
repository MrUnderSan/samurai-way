import axios, {AxiosResponse} from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'api-key': 'bde9abe2-6298-40ef-b9d3-8bd4f4bd5d6a'
    }
})

export const authAPI = {
    getUserData() {
        return instance.get(`auth/me`, {
            withCredentials: true
        })
    },
    login(body: LoginBodyType){
        return instance.post<ResponseType<{userId: number}>, AxiosResponse<ResponseType<{userId: number}>>, LoginBodyType>('auth/login', body)
    },
    logout() {
        return instance.delete<ResponseType, AxiosResponse<ResponseType>>('auth/login')
    }
}

export type LoginBodyType = {
    email: string
    password: string
    rememberMe: boolean
}

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    follow(userId: string) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: string) {
        return instance.delete(`follow/${userId}`)
    }
}

export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getUserStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateUserStatus(status: string) {
        return instance.put(`profile/status`, {status})
    }
}

type ResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    data: D
}
