import {addDialogAC, dialogID1, dialogID2, dialogsReducer, DialogsType, removeDialogAC} from "./dialogsReducer";

test('dialogReducer should add dialog', () => {
    const startState: DialogsType = [
        {id: dialogID1, name: "Tasya"},
        {id: dialogID2, name: "Tima"},
    ]
    const newTitle = 'Alina'
    const endState: DialogsType = dialogsReducer(startState, addDialogAC(newTitle))
    expect(endState.length).toBe(3)
    expect(endState[endState.length-1].name).toBe(newTitle)
})
test('dialogReducer should remove dialog', () => {
    const startState: DialogsType = [
        {id: dialogID1, name: "Tasya"},
        {id: dialogID2, name: "Tima"},
    ]
    let removeID = startState[startState.length - 1].id
    const endState: DialogsType = dialogsReducer(startState, removeDialogAC(removeID))
    expect(endState.length).toBe(1)
    expect(endState[0].name).toBe(startState[0].name)
})
