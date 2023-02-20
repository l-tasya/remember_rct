import {Dispatch} from 'redux';
import {v1} from 'uuid'
import {profileAPI} from '../../api/api';
import {IPost, IProfile, ProfileReducerType} from '../../common/types/types';
import {handleServerAppError, handleServerNetworkError} from '../../common/utils/error-utils';
import {RequestStatusType, setAlertMessageAC, setLoadingStatusAC} from './appReducer';
import {setAuthProfileAC} from './authReducer';

type ActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof removePostAC>
    | ReturnType<typeof likeClickAC>
    | ReturnType<typeof setProfileAC>
    | ReturnType<typeof setProfileStatusAC>
    | ReturnType<typeof setLoadingStatusAC>
    | ReturnType<typeof setAlertMessageAC>
    | ReturnType<typeof setAuthProfileAC>
    | ReturnType<typeof setProfileEntityAC>


const initialState: ProfileReducerType = {
    profile: {
        fullName: 'blank',
        photos: {
            large: null,
            small: null,
        },
        userId: 1,
        lookingForAJob: false,
        contacts: {
            mainLink: '',
        },
        lookingForAJobDescription: '',
        aboutMe: ''
    },
    status: 'blank',
    entityStatus: 'idle',
    posts: [
        {
            id: v1(),
            isLiked: false,
            message: 'States want to correct their votes, which they now know were based on irregularities and fraud, plus corrupt process never received legislative approval.  All Mike Pence has to do is send them back to the States, AND WE WIN. Do it Mike, this is a time for extreme courage!',
            time: 'Nov 12 at 07:00',
            likeCount: 3
        },
        {
            id: v1(),
            isLiked: false,
            message: 'If Vice President Mike Pence comes through for us, we will win the Presidency. Many States want to decertify the mistake they made in certifying incorrect & even fraudulent numbers in a process  NOT approved by their State Legislatures (which it must be). Mike can send it back!',
            time: 'Sep at 09:47',
            likeCount: 3
        },
        {
            id: v1(),
            isLiked: true,
            message: 'We\'re seeing a stronger labor market where jobs are booming and more Americans are working than ever in history. That\'s what happens when you build an economy from the bottom up and the middle out—it gives everyone a chance to get ahead.',
            time: 'Jan 8 at 16:44',
            likeCount: 3
        },
        {
            id: v1(),
            isLiked: false,
            message: 'Democrats voted to cut the deficit to fight inflation by having the wealthy and big corporations pay their fair share. Every single Republican opposed requiring big corporations to pay a minimum tax of 15%, instead of some getting away with paying $0 in federal income taxes.',
            time: 'Jan 7 at 04:20',
            likeCount: 3
        },
        {
            id: v1(),
            isLiked: false,
            message: 'Democrats sided with the American people with the Inflation Reduction Act, and the Republicans sided with special interests. \n' +
                'That\'s the choice we face: Whether we protect the already powerful or have the courage to build a future where everybody has an even shot.',
            time: 'Jan 7 at 03:28',
            likeCount: 444
        },
        {
            id: v1(),
            isLiked: false,
            message: 'last',
            time: 'Jan U j U',
            likeCount: 3333
        }
    ]
}
export const profileReducer = (state: ProfileReducerType = initialState, action: ActionsType): ProfileReducerType => {
    switch (action.type) {
        case 'ADD-POST': {
            const stateCopy = {...state}
            const newItem: IPost = {
                id: v1(),
                message: action.newValue,
                time: action.time,
                likeCount: 0,
                isLiked: false
            }
            stateCopy.posts = [newItem, ...stateCopy.posts]
            return stateCopy
        }
        case 'REMOVE-POST': {
            const stateCopy = {...state}
            stateCopy.posts = stateCopy.posts.filter(t => t.id !== action.postID)
            return stateCopy
        }
        case 'LIKE': {
            const stateCopy = {...state}
            let posts = stateCopy.posts
            stateCopy.posts = posts.map(t => t.id === action.postID ? {
                ...t,
                likeCount: t.likeCount += 1,
                isLiked: !t.isLiked
            } : t)
            return {...stateCopy}
        }
        case 'SET-PROFILE': {
            const stateCopy = {...state}
            stateCopy.profile = action.profile

            return stateCopy
        }
        case 'SET-PROFILE-ENTITY': {
            return {...state, entityStatus: action.newValue}
        }
        case 'SET-STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        default: {
            return state
        }
    }
}
export const addPostAC = (newValue: string) => {
    let date = new Date()
    let time = `${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`
    return {
        type: 'ADD-POST',
        newValue,
        time,
    } as const
}
export const removePostAC = (postID: string) => {
    return {
        type: 'REMOVE-POST',
        postID,
    } as const
}
export const likeClickAC = (postID: string) => {
    return {
        type: 'LIKE',
        postID
    } as const
}
export const setProfileAC = (profile: IProfile) => {
    return {
        type: 'SET-PROFILE',
        profile
    } as const
}
export const setProfileEntityAC = (newValue: RequestStatusType) => {
    return {
        type: 'SET-PROFILE-ENTITY',
        newValue,
    } as const
}
export const setProfileStatusAC = (status: string) => {
    return {
        type: 'SET-STATUS',
        status
    } as const
}
export const getProfileThunkCreator = (id: number) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setLoadingStatusAC('loading'))
    profileAPI.getProfile(id)
        .then((response) => {
            dispatch(setProfileAC(response.data))
            dispatch(setLoadingStatusAC('succeeded'))
        })
        .catch((e) => {
            handleServerNetworkError(dispatch, e)
        })
}
export const changeProfileThunkCreator = (profile: IProfile) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setLoadingStatusAC('loading'))
    dispatch(setProfileEntityAC('loading'))
    profileAPI.changeProfile(profile)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthProfileAC(profile))
                dispatch(setLoadingStatusAC('succeeded'))
                dispatch(setProfileEntityAC('succeeded'))
                setTimeout(() => dispatch(setAlertMessageAC('Profile changed Successfully!')), 300)

            } else {
                handleServerAppError(res.data, dispatch)
                setTimeout(() => dispatch(setProfileEntityAC('failed')), 3200)
            }
        })
        .catch((e) => {
            handleServerNetworkError(dispatch, e)
            dispatch(setProfileEntityAC('failed'))
        })
}
export const getStatusThunkCreator = (id: number) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setLoadingStatusAC('loading'))
    profileAPI.getStatus(id)
        .then(response => {
            dispatch(setProfileStatusAC(response.data))
            dispatch(setLoadingStatusAC('succeeded'))
        })
        .catch((e) => {
            handleServerNetworkError(dispatch, e)
        })
}
export const updateStatusThunkCreator = (status: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setLoadingStatusAC('loading'))
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setProfileStatusAC(status))
            dispatch(setLoadingStatusAC('succeeded'))
        }
    })
        .catch((e) => {
            handleServerNetworkError(dispatch, e)
        })
}