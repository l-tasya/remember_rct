import {addPostAC, likeClickAC, profileReducer, ProfileStateType, removePostAC} from "./profileReducer";
import {v1} from "uuid";

test('correct post should be added', () =>{
    const startState: ProfileStateType = {
        userInfo: {
            name: 'Temirtas',
            status: 'dalionfull@gmail.com',
            photo: {
                large: undefined,
                small: undefined,
            },
            id: 333,
            followed: true,
        },
        posts: [
            {id: v1(), message: 'someText', time: '22:22',likeCount: 3, isLiked: false},
            {id: v1(), message: 'someText', time: '22:22',likeCount: 3, isLiked: false},
            {id: v1(), message: 'someText', time: '22:22',likeCount: 3, isLiked: false},
            {id: v1(), message: 'someText', time: '22:22',likeCount: 3, isLiked: false},
        ]
    }
    let newPostMessage = 'nomatter'
    const endState: ProfileStateType = profileReducer(startState, addPostAC(newPostMessage))
    expect(endState.posts.length).toEqual(5)
    expect(endState.posts[0].message).toBe(newPostMessage)
})
test('correct post should be removed', () =>{
    const startState: ProfileStateType = {
        userInfo: {
            name: 'Temirtas',
            status: 'dalionfull@gmail.com',
            photo: {
                large: undefined,
                small: undefined,
            },
            id: 333,
            followed: true,
        },
        posts: [
            {id: v1(), message: 'someText', time: '22:22',likeCount: 3, isLiked: false},
            {id: v1(), message: 'someText', time: '22:22',likeCount: 3, isLiked: false},
            {id: v1(), message: 'someText', time: '22:22',likeCount: 3, isLiked: false},
            {id: v1(), message: '4', time: '22:22',likeCount: 3, isLiked: false},
        ]
    }
    let removeID = startState.posts[2].id
    const endState: ProfileStateType = profileReducer(startState, removePostAC(removeID))
    expect(endState.posts[2].message).toBe('4')
})
test('correct post isLiked should change value and likeCount should increase', () =>{
    const startState: ProfileStateType = {
        userInfo: {
            name: 'Temirtas',
            status: 'dalionfull@gmail.com',
            photo: {
                large: undefined,
                small: undefined,
            },
            id: 333,
            followed: true,
        },
        posts: [
            {id: v1(), message: 'someText', time: '22:22',likeCount: 3, isLiked: false},
            {id: v1(), message: 'someText', time: '22:22',likeCount: 3, isLiked: false},
            {id: v1(), message: 'someText', time: '22:22',likeCount: 3, isLiked: false},
            {id: v1(), message: 'someText', time: '22:22',likeCount: 3, isLiked: false},
        ]
    }
    const postID = startState.posts[2].id
    const endState = profileReducer(startState, likeClickAC(postID))
    expect(endState.posts.find(t=>t.id === postID)?.isLiked).toEqual(true)
    expect(endState.posts.find(t=>t.id === postID)?.likeCount).toBe(4)
})