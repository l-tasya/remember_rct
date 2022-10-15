import {v1} from 'uuid'

type ActionsType = ReturnType<typeof addDialogAC>
| ReturnType<typeof removeDialogAC>
type StateType = DialogsType;
export type DialogType = {
    id: string
    name: string
}
export type DialogsType = DialogType[]
export const dialogID1 = v1()
export const dialogID2 = v1()
const initialState: StateType = [
    {id: dialogID1, name: "Tasya"},
    {id: dialogID2, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "Tima"},
    {id: `${Math.random()}`, name: "last"},

]
export const dialogsReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case "ADD-DIALOG":{
            let stateCopy = [...state]
            const newDialog: DialogType = {
                id: action.id,
                name: action.newValue
            }
            stateCopy = [...stateCopy,newDialog]
            return stateCopy
        }
        case "REMOVE-DIALOG":{
            let stateCopy: StateType = [...state]
            return stateCopy.filter(t=>t.id !== action.dialogID)

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
    }as const
}
export const removeDialogAC = (dialogID: string) =>{
    return {
        type: 'REMOVE-DIALOG',
        dialogID
    }as const
}