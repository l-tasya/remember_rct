import axios from 'axios';

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';


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
            .then(response => response.data)
    },
    deleteFollow: (id: number) => {
        return instance.delete(baseURL + `follow/${id}`)
            .then(response => response.data)
            .catch(error => console.warn(error.response.statusText))
    },
    postFollow: (id: number) => {
        return instance.post(baseURL + `follow/${id}`)
            .then(response => response.data)
            .catch(error => console.warn(error.response.statusText))
    },
}
export const authAPI = {
    getUserData: () => {
        return instance.get(baseURL + `auth/me`)
            .then(response => response.data)
            .catch(error => console.log(error))
    },
}
export const profileAPI = {
    getProfile: (userID: string | undefined) => {
        return instance.get(baseURL + `profile/${userID}`).then(response => response.data)
    }
}
