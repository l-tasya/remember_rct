import axios, {AxiosResponse} from 'axios';
import {IProfile, IUser, ResponseType} from '../common/types/types';

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    headers: {
        'API-KEY': '9aecfb73-6cd3-4101-8b06-9748a118440e'
    }
});

export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get<{ items: IUser[], totalCount: number }>(baseURL + `users?page=${currentPage}&count=${pageSize}`)
    },
    deleteFollow: (id: number) => {
        return instance.delete<ResponseType>(baseURL + `follow/${id}`)
    },
    postFollow: (id: number) => {
        return instance.post<ResponseType>(baseURL + `follow/${id}`)
    },
}


type AuthResponse = ResponseType<{ id: number, email: string, login: string }>
type RequestProperties = { email: string, password: string, rememberMe: boolean }
type LoginResponse = ResponseType<{ userId: number }>


export const authAPI = {

    getUserData: async () => {
        return await instance.get<AuthResponse>(baseURL + `auth/me`)
    },

    logIn: (email: string, password: string, rememberMe: boolean = false) => {
        return instance.post<RequestProperties, AxiosResponse<LoginResponse>>(baseURL + `auth/login`, {
            email,
            password,
            rememberMe
        })
    },

    logOut: () => {
        return instance.delete<ResponseType>(baseURL + `auth/login`)
    }

}


export const profileAPI = {
    getProfile: (userID: number) => {
        return instance.get<IProfile>(baseURL + `profile/${userID}`)
    },
    changeProfile: (profile: IProfile) => {
        return instance.put<IProfile, AxiosResponse<ResponseType>>(baseURL + `profile`, profile)
    },
    getStatus: (userID: number) => {
        return instance.get<string>(baseURL + `profile/status/${userID}`)
    },
    updateStatus: (status: string) => {
        return instance.put<{ status: string }, AxiosResponse<ResponseType>>(baseURL + `profile/status`, {status: status})
    }
}


