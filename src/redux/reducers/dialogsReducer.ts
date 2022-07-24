import {v1} from 'uuid'

type ActionsType= {};
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
    ]
export const dialogsReducer = (state: StateType = initialState, action: ActionsType): StateType => {
    switch (action) {
        default:{
            return state
        }
    }
}