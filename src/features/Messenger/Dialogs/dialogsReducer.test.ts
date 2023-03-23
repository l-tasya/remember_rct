import {addDialogAC, dialogID1, dialogID2, dialogsReducer, DialogsType, removeDialogAC} from "./dialogsReducer";

test('dialogReducer should add dialog', () => {
    const startState: DialogsType = {
        dialogs: [
            {id: dialogID1, name: "Tasya"},
            {id: dialogID2, name: "Tima"},
        ],
    }
    const newTitle = 'Alina'
    const endState: DialogsType = dialogsReducer(startState, addDialogAC(newTitle))
    expect(endState.dialogs.length).toBe(3)
    expect(endState.dialogs[endState.dialogs.length - 1].name).toBe(newTitle)
})
test('dialogReducer should remove dialog', () => {
    const startState: DialogsType = {
        dialogs: [
            {id: dialogID1, name: "Tasya"},
            {id: dialogID2, name: "Tima"},
        ],
    }
    let removeID = startState.dialogs[startState.dialogs.length - 1].id
    const endState: DialogsType = dialogsReducer(startState, removeDialogAC(removeID))
    expect(endState.dialogs.length).toBe(1)
    expect(endState.dialogs[0].name).toBe(startState.dialogs[0].name)
})
