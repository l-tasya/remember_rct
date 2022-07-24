import {v1} from 'uuid'
import {dialogID1, dialogID2} from "./dialogsReducer";

export type MessageType = {
    id: string
    message: string
    isMe: boolean
}
export type MessagesType = {
    [key: string]: MessageType[]
}


type ActionsType= ReturnType<typeof addMessage>;
export type StateType = MessagesType;
const initialState: StateType = {
    [dialogID1]:[
        {id: v1(), message: 'text1', isMe: true},
        {id: v1(), message: 'text1', isMe: true},
        {id: v1(), message: 'text1', isMe: true},
    ],
    [dialogID2]:[
        {id: v1(), message: 'text2',isMe: true},
        {id: v1(), message: 'text2',isMe: true},
        {id: v1(), message: 'text2',isMe: true},
    ]
}
export const messagesReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case "ADD-MESSAGE":{
            const stateCopy = {...state};
            let newMessage: MessageType = {
                id:v1(),
                message: action.newValue,
                isMe: action.isMe,
            }
            stateCopy[action.dialogID] =[...stateCopy[action.dialogID], newMessage]
            return stateCopy
        }
        default: {
            return state
        }
    }
}
export const addMessage = (dialogID: string, newValue: string, isMe: boolean) =>{
    return {
        type: "ADD-MESSAGE",
        dialogID,
        newValue,
        isMe,
    } as const
}