import {
    addPostAC,
    likeClickAC,
    profileReducer,
    ProfileStateType,
    ProfileUserType,
    removePostAC,
    setProfileAC
} from "./profileReducer";
import {v1} from "uuid";


test('correct post should be added', () =>{
    const startState: ProfileStateType = {
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
    let newPostMessage = 'nomatter'
    const endState: ProfileStateType = profileReducer(startState, addPostAC(newPostMessage))
    expect(endState.posts.length).toEqual(5)
    expect(endState.posts[0].message).toBe(newPostMessage)
})
test('correct post should be removed', () =>{
    const startState: ProfileStateType = {
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
    const endState: ProfileStateType = profileReducer(startState, removePostAC(removeID))
    expect(endState.posts[2].message).toBe('4')
})
test('correct post isLiked should change value and likeCount should increase', () =>{
    const startState: ProfileStateType = {
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
    const startState: ProfileStateType = {
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
    let newProfile: ProfileUserType = {
        fullName: "Yuriy",
        photos: {
            large: undefined,
            small: undefined,
        },
        userId: 222,
        lookingForAJob: false,
        contacts: {
            mainLink: "vk.com"
        },
        lookingForAJobDescription: "blank",
        aboutMe: "i am front"
    }

    const endState: ProfileStateType = profileReducer(startState, setProfileAC(newProfile))
    expect(endState.profile.fullName).toEqual(newProfile.fullName)
    expect(endState.profile.userId).toEqual(newProfile.userId)
    expect(endState.profile.contacts.mainLink).toEqual(newProfile.contacts.mainLink)
})