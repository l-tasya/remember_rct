import {v1} from 'uuid'

type ActionsType = ReturnType<typeof addDialogAC>
    | ReturnType<typeof removeDialogAC>
type StateType = DialogsType;
export type DialogType = {
    id: string
    name: string
}
export type DialogsType = {
    dialogs: DialogType[],
}
export const dialogID1 = '2'
export const dialogID2 = '1'
const initialState: StateType = {
    dialogs: [
        {id: dialogID1, name: "Tasya"},
        {id: dialogID2, name: "Tima"},
        {id: "3", name: "user"},
        {id: "4", name: "user"},
        {id: "5", name: "user"},
        {id: "6", name: "user"},
        {id: "7", name: "user"},
        {id: "8", name: "user"},
        {id: "9", name: "Tima"},
    ],
}
export const dialogsReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case "ADD-DIALOG": {
            let stateCopy = {...state}
            const newDialog: DialogType = {
                id: action.id,
                name: action.newValue
            }
            stateCopy.dialogs = [...state.dialogs, newDialog];
            return stateCopy
        }
        case "REMOVE-DIALOG": {
            let stateCopy = {...state}
            stateCopy.dialogs = stateCopy.dialogs.filter(t => t.id !== action.dialogID)
            return stateCopy

        }
        default: {
            return state
        }
    }
}
export const addDialogAC = (newValue: string) => {
    return {
        type: 'ADD-DIALOG',
        id: v1(),
        newValue,
    } as const
}
export const removeDialogAC = (dialogID: string) => {
    return {
        type: 'REMOVE-DIALOG',
        dialogID
    } as const
}