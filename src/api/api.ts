import axios from "axios";
import {ProfileUserType} from "../redux/reducers/profileReducer";

const baseURL = "https://social-network.samuraijs.com/api/1.0/";

//TODO: add types
const instance = axios.create({
    baseURL: baseURL,
    withCredentials: true,
    headers: {
        "API-KEY": "9aecfb73-6cd3-4101-8b06-9748a118440e"
    }
});
export const usersAPI = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get(baseURL + `users?page=${currentPage}&count=${pageSize}`)
    },
    deleteFollow: (id: number) => {
        return instance.delete(baseURL + `follow/${id}`)
    },
    postFollow: (id: number) => {
        return instance.post(baseURL + `follow/${id}`)
    },
}
export const authAPI = {
    getUserData: () => {
        return instance.get(baseURL + `auth/me`)
            .then(response => response.data)
    },
}

type ResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    data: D
}
export const profileAPI = {
    getProfile: (userID: number) => {
        return instance.get(baseURL + `profile/${userID}`)
    },
    changeProfile: (profile: ProfileUserType) => {
        return instance.put<ResponseType>(baseURL + `profile`, {...profile}).then((res) => res.data)
    },
    getStatus: (userID: number) => {
        return instance.get(baseURL + `profile/status/${userID}`)
    },
    updateStatus: (status: string) => {
        return instance.put<ResponseType>(baseURL + `profile/status`, {status: status})
    }
}
