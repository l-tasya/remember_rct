import {addPostAC, profileReducer, ProfileStateType, removePostAC} from "./profileReducer";
import { v1 } from "uuid";

test('correct post should be added', () =>{
    const startState: ProfileStateType = {
        userInfo: {
            name: 'Temirtas',
            surname: 'Nursain',
            eMail: 'dalionfull@gmail.com',
            photo: `ddd`
        },
        posts: [
            {id: v1(), message: 'someText', time: '22:22'},
            {id: v1(), message: 'someText', time: '22:22'},
            {id: v1(), message: 'someText', time: '22:22'},
            {id: v1(), message: 'someText', time: '22:22'},
        ]
    }
    let newPostMessage = 'nomatter'
    const endState: ProfileStateType = profileReducer(startState, addPostAC(newPostMessage))
    expect(endState.posts.length).toEqual(5)
    expect(endState.posts[endState.posts.length-1].message).toBe(newPostMessage)
})
test('correct post should be removed', () =>{
    const startState: ProfileStateType = {
        userInfo: {
            name: 'Temirtas',
            surname: 'Nursain',
            eMail: 'dalionfull@gmail.com',
            photo: `ddd`
        },
        posts: [
            {id: v1(), message: '1', time: '22:22'},
            {id: v1(), message: '2', time: '22:22'},
            {id: v1(), message: '3', time: '22:22'},
            {id: v1(), message: '4', time: '22:22'},
        ]
    }
    let removeID = startState.posts[2].id
    const endState: ProfileStateType = profileReducer(startState, removePostAC(removeID))
    expect(endState.posts[2].message).toBe('4')
})