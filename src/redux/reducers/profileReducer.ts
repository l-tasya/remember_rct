import {v1} from 'uuid'
import ava from '../../common/img/eral.jpg';

type ActionsType = ReturnType<typeof addPostAC>
    | ReturnType<typeof removePostAC>
    | ReturnType<typeof likeClickAC>
    | ReturnType<typeof setProfileAC>


export type PostType = {
    id: string
    message: string
    time: string
    likeCount: number
    isLiked: boolean
}
export type ProfileUserType = {
    userId: number
    lookingForAJob?: boolean
    fullName: string
    contacts: {
        mainLink?: string
    }
    photos: {
        small?: string
        large?: string
    }
}
export type ProfileStateType = {
    profile: ProfileUserType,
    posts: PostType[],
}
const avaIMG = ava
type StateType = ProfileStateType
export const defaultUser  = {
        userId: 333,
        fullName: 'Temirtas Nursain',
        photos: {
            small: avaIMG,
            large: avaIMG
        },
        contacts: {
            mainLink: '',
        },
        lookingForAJob: false
    }
const initialState: StateType = {
    profile: defaultUser,
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
export const profileReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case 'ADD-POST': {
            const stateCopy = {...state}
            const time = `${new Date}`.split(' ').filter((t, i) => [1, 2, 4].some(j => j === i)).join(' ').slice(0, 12).split(' ')
            const resultTime = `${time[0]} ${time[1]} at ${time[2]}`
            const newItem: PostType = {
                id: v1(),
                message: action.newValue,
                time: resultTime,
                likeCount: 0,
                isLiked: false
            }
            stateCopy.posts = [newItem, ...stateCopy.posts]
            return stateCopy
        }
        case "REMOVE-POST": {
            const stateCopy = {...state}
            stateCopy.posts = stateCopy.posts.filter(t => t.id !== action.postID)
            return stateCopy
        }
        case "LIKE": {
            const stateCopy = {...state}
            let posts = stateCopy.posts
            stateCopy.posts = posts.map(t => t.id === action.postID ? {
                ...t,
                likeCount: t.likeCount += 1,
                isLiked: !t.isLiked
            } : t)
            return {...stateCopy}
        }
        case "SET-PROFILE": {
            const stateCopy = {...state}
            stateCopy.profile = action.profile

            return stateCopy
        }
        default: {
            return state
        }
    }
}
export const addPostAC = (newValue: string) => {
    return {
        type: 'ADD-POST',
        newValue,
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
export const setProfileAC = (profile: ProfileUserType) => {
    return {
        type: 'SET-PROFILE',
        profile
    } as const
}