import {
    addPostAC,
    InitialState,
    likeClickAC,
    profileReducer,
    removePostAC,
    setProfileAC,
    setProfileEntityAC, setProfileLoadingAC
} from './profileReducer';
import {v1} from 'uuid';
import {IProfile} from '../../common/types/types';
import {RequestStatusType} from './appReducer';

const startState: InitialState = {
    profile: {
        userId: 333,
        fullName: 'Temirtas Nursain',
        photos: {
            small: 'avaIMG',
            large: 'avaIMG'
        },
        contacts: {
            mainLink: '',
        },
        lookingForAJob: false,
        lookingForAJobDescription: 'blank',
        aboutMe: 'i am front'
    },
    profileLoading: 'idle',
    status: null,
    entityStatus: 'idle',
    posts: [
        {id: v1(), message: 'someText', time: '22:22', likeCount: 3, isLiked: false},
        {id: v1(), message: 'someText', time: '22:22', likeCount: 3, isLiked: false},
        {id: v1(), message: 'someText', time: '22:22', likeCount: 3, isLiked: false},
        {id: v1(), message: 'someText', time: '22:22', likeCount: 3, isLiked: false},
    ],
}
test('correct post should be added', () => {

    let newPostMessage = 'nomatter'
    const endState = profileReducer(startState, addPostAC(newPostMessage))
    expect(endState.posts.length).toEqual(5)
    expect(endState.posts[0].message).toBe(newPostMessage)
})
test('correct post should be removed', () => {
    let removeID = startState.posts[2].id
    const endState = profileReducer(startState, removePostAC(removeID))
    expect(endState.posts[2].message).toBe('4')
})
test('correct post isLiked should change value and likeCount should increase', () => {
    const postID = startState.posts[2].id
    const endState = profileReducer(startState, likeClickAC(postID))
    expect(endState.posts.find(t => t.id === postID)?.isLiked).toEqual(true)
    expect(endState.posts.find(t => t.id === postID)?.likeCount).toBe(4)
})
test('reducer should set a new user of profilePage', () => {
    let newProfile: IProfile = {
        fullName: 'Yuriy',
        photos: {
            large: null,
            small: null,
        },
        userId: 222,
        lookingForAJob: false,
        contacts: {
            mainLink: 'vk.com'
        },
        lookingForAJobDescription: 'blank',
        aboutMe: 'i am front'
    }

    const endState = profileReducer(startState, setProfileAC(newProfile))
    expect(endState.profile!.fullName).toEqual(newProfile.fullName)
    expect(endState.profile!.userId).toEqual(newProfile.userId)
    expect(endState.profile!.contacts.mainLink).toEqual(newProfile.contacts.mainLink)
})
test('reducer should change entityStatus', () => {
    let newValue: RequestStatusType = 'loading'
    const endState = profileReducer(startState, setProfileEntityAC(newValue))
    expect(endState.entityStatus).toEqual(newValue)
})
test('setProfileLoading', () => {
    let newValue: RequestStatusType = 'loading'
    const endState = profileReducer(startState, setProfileLoadingAC(newValue))
    expect(endState.profileLoading).toEqual(newValue)
})