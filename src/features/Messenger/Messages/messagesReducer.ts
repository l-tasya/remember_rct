import {v1} from 'uuid'
import {addDialogAC, dialogID1, dialogID2, removeDialogAC} from "../Dialogs/dialogsReducer";

export type MessageType = {
    id: string
    message: string
    isMe: boolean
    time: string
}
export type MessagesType = {
    [key: string]: MessageType[]
}


type ActionsType= ReturnType<typeof addMessageAC>
    |ReturnType<typeof addDialogAC>
    |ReturnType<typeof removeDialogAC>
export type StateType = MessagesType;
const initialState: StateType = {
    [dialogID1]: [
        {id: v1(), message: 'Дарова', isMe: true, time: '13:30'},
        {id: v1(), message: "Дарова", isMe: false, time: "13:30"},
        {id: v1(), message: "Как дела?", isMe: true, time: "13:30"},
        {id: v1(), message: "Норм, ты че мутишь?", isMe: false, time: "13:30"},
    ],
    [dialogID2]: [
        {id: v1(), message: "...", isMe: false, time: "13:30"},
        {id: v1(), message: "...", isMe: true, time: "13:30"},
        {id: v1(), message: "...", isMe: false, time: "13:30"},
        {id: v1(), message: "...", isMe: true, time: "13:30"},
        {id: v1(), message: "...", isMe: false, time: "13:30"},
    ],
}
export const messagesReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case "ADD-MESSAGE":{
            const stateCopy = {...state};

            let newMessage: MessageType = {
                id:v1(),
                message: action.newValue,
                isMe: action.isMe,
                time: action.time
            }
            stateCopy[action.dialogID] =[...stateCopy[action.dialogID], newMessage]
            return stateCopy
        }
        case "ADD-DIALOG":{
            const stateCopy = {...state};
            stateCopy[action.id] = [];
            return stateCopy
        }
        case "REMOVE-DIALOG":{
            const stateCopy = {...state}
            delete stateCopy[action.dialogID]
            return stateCopy
        }
        default: {
            return state
        }
    }
}
export const addMessageAC = (dialogID: string, newValue: string, isMe: boolean) => {
    let date = new Date();
    let time = `${date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`
    return {
        type: 'ADD-MESSAGE',
        dialogID,
        newValue,
        isMe,
        time,
    } as const
}