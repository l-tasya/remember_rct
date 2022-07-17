import {addPostAC, profileReducer, ProfileStateType} from "./profileReducer";
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