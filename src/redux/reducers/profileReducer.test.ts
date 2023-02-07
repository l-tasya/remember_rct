import {
    addPostAC,
    likeClickAC,
    profileReducer,
    removePostAC,
    setProfileAC
} from "./profileReducer";
import {v1} from "uuid";
import {IProfile, ProfileReducerType} from "../../common/types/types";


test('correct post should be added', () =>{
    const startState: ProfileReducerType = {
        profile: {
            userId: 333,
            fullName: "Temirtas Nursain",
            photos: {
                small: "avaIMG",
                large: "avaIMG"
            },
            contacts: {
                mainLink: "",
            },
            lookingForAJob: false,
            lookingForAJobDescription: "blank",
            aboutMe: "i am front"
        }, status: "",
        posts: [
            {id: v1(), message: "someText", time: "22:22", likeCount: 3, isLiked: false},
            {id: v1(), message: "someText", time: "22:22", likeCount: 3, isLiked: false},
            {id: v1(), message: "someText", time: "22:22", likeCount: 3, isLiked: false},
            {id: v1(), message: "someText", time: "22:22", likeCount: 3, isLiked: false},
        ]
    }
    let newPostMessage = "nomatter"
    const endState: ProfileReducerType = profileReducer(startState, addPostAC(newPostMessage))
    expect(endState.posts.length).toEqual(5)
    expect(endState.posts[0].message).toBe(newPostMessage)
})
test('correct post should be removed', () =>{
    const startState: ProfileReducerType = {
        profile: {
            userId: 333,
            fullName: "Temirtas Nursain",
            photos: {
                small: "avaIMG",
                large: "avaIMG"
            },
            contacts: {
                mainLink: "",
            },
            lookingForAJob: false,
            lookingForAJobDescription: "blank",
            aboutMe: "i am front"
        }, status: "",
        posts: [
            {id: v1(), message: "someText", time: "22:22", likeCount: 3, isLiked: false},
            {id: v1(), message: "someText", time: "22:22", likeCount: 3, isLiked: false},
            {id: v1(), message: "someText", time: "22:22", likeCount: 3, isLiked: false},
            {id: v1(), message: "4", time: "22:22", likeCount: 3, isLiked: false},
        ]
    }
    let removeID = startState.posts[2].id
    const endState: ProfileReducerType = profileReducer(startState, removePostAC(removeID))
    expect(endState.posts[2].message).toBe('4')
})
test('correct post isLiked should change value and likeCount should increase', () =>{
    const startState: ProfileReducerType = {
        profile: {
            userId: 333,
            fullName: "Temirtas Nursain",
            photos: {
                small: "avaIMG",
                large: "avaIMG"
            },
            contacts: {
                mainLink: "",
            },
            lookingForAJob: false,
            lookingForAJobDescription: "blank",
            aboutMe: "i am front"
        }, status: "",
        posts: [
            {id: v1(), message: "someText", time: "22:22", likeCount: 3, isLiked: false},
            {id: v1(), message: "someText", time: "22:22", likeCount: 3, isLiked: false},
            {id: v1(), message: "someText", time: "22:22", likeCount: 3, isLiked: false},
            {id: v1(), message: "someText", time: "22:22", likeCount: 3, isLiked: false},
        ]
    }
    const postID = startState.posts[2].id
    const endState = profileReducer(startState, likeClickAC(postID))
    expect(endState.posts.find(t=>t.id === postID)?.isLiked).toEqual(true)
    expect(endState.posts.find(t=>t.id === postID)?.likeCount).toBe(4)
})
test('reducer should set a new user of profilePage', ()=>{
    const startState: ProfileReducerType = {
        profile: {
            userId: 333,
            fullName: "Temirtas Nursain",
            photos: {
                small: "avaIMG",
                large: "avaIMG"
            },
            contacts: {
                mainLink: "",

            },
            lookingForAJob: false,
            lookingForAJobDescription: "blank",
            aboutMe: "i am front"
        }, status: "",
        posts: [
            {id: v1(), message: "someText", time: "22:22", likeCount: 3, isLiked: false},
            {id: v1(), message: "someText", time: "22:22", likeCount: 3, isLiked: false},
            {id: v1(), message: "someText", time: "22:22", likeCount: 3, isLiked: false},
            {id: v1(), message: "4", time: "22:22", likeCount: 3, isLiked: false},
        ]
    }
    let newProfile: IProfile = {
        fullName: "Yuriy",
        photos: {
            large: null,
            small: null,
        },
        userId: 222,
        lookingForAJob: false,
        contacts: {
            mainLink: "vk.com"
        },
        lookingForAJobDescription: "blank",
        aboutMe: "i am front"
    }

    const endState: ProfileReducerType = profileReducer(startState, setProfileAC(newProfile))
    expect(endState.profile.fullName).toEqual(newProfile.fullName)
    expect(endState.profile.userId).toEqual(newProfile.userId)
    expect(endState.profile.contacts.mainLink).toEqual(newProfile.contacts.mainLink)
})