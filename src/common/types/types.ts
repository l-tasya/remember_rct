export type IProfile = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github?: string
        vk?: string
        facebook?: string
        instagram?: string
        twitter?: string
        website?: string
        youtube?: string
        mainLink: string | null
    }
    photos: {
        small: string | null
        large: string | null
    }
    aboutMe: string
}

export interface IUser {

    name: string
    id: number
    photo: {
        small?: string,
        large?: string,
    }
    status?: string
    followed: boolean
}

export type IPost = {
    id: string
    message: string
    time: string
    likeCount: number
    isLiked: boolean
}


export type ProfileReducerType = {
    profile: IProfile,
    status: string,
    posts: IPost[],

}