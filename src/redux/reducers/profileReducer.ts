import { v1 } from 'uuid'
import ava from '../../common/img/eral.jpg';
type ActionsType = ReturnType<typeof addPostAC>
| ReturnType<typeof removePostAC>

export type UserType = {
    name: string
    surname: string
    eMail: string
    photo: string
}
export type PostType = {
    id: string
    message: string
    time: string
}
export type ProfileStateType = {
    userInfo: UserType,
    posts: PostType[],
}
const avaIMG = ava
type StateType = ProfileStateType
const initialState: StateType = {
    userInfo: {
        name: 'Temirtas',
        surname: 'Nursain',
        eMail: 'dalionfull@gmail.com',
        photo: avaIMG
    },
    posts: [
        {id: v1(), message: 'someText', time: '22:22'},
        {id: v1(), message: 'someText', time: '22:22'},
        {id: v1(), message: 'someText', time: '22:22'},
        {id: v1(), message: 'someText', time: '22:22'},
        {id: v1(), message: 'someText', time: '22:22'},
    ]
}
export const profileReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case 'ADD-POST':{
            const stateCopy = {...state}
            const newItem: PostType = {id: v1(), message: action.newValue, time: '22:22'}
            stateCopy.posts = [...stateCopy.posts, newItem]
            return stateCopy
        }
        case "REMOVE-POST":{
            const stateCopy = {...state}
            stateCopy.posts = stateCopy.posts.filter(t=>t.id !== action.postID)
            return stateCopy
        }
        default:{
            return state
        }
    }
}
export const addPostAC = (newValue: string) =>{
    return {
        type: 'ADD-POST',
        newValue,
    } as const
}
export const removePostAC = (postID: string) =>{
    return {
        type: 'REMOVE-POST',
        postID,
    } as const
}