import {v1} from "uuid";
import {addMessageAC, messagesReducer, StateType} from "./messagesReducer";
import {addDialogAC, removeDialogAC} from "./dialogsReducer";

test('messagesReducer should add message',()=>{
    const startState: StateType = {
        ['1']:[
            {id: v1(), message: 'text1', isMe: true},
            {id: v1(), message: 'text1', isMe: true},
            {id: v1(), message: 'text1', isMe: true},
        ],
        ['2']:[
            {id: v1(), message: 'text2', isMe: true},
            {id: v1(), message: 'text2', isMe: true},
            {id: v1(), message: 'text2', isMe: true},
        ]
    }
    let newValue = 'tasta'
    const endState: StateType = messagesReducer(startState, addMessageAC('1',newValue,true))
    expect(endState['1'].length).toBe(4)
    expect(endState['1'][endState['1'].length-1].message).toBe(newValue)

})
test('messageReducer should add new messages array when dialog is added', ()=>{
    const startState: StateType = {
        ['1']:[
            {id: v1(), message: 'text1', isMe: true},
            {id: v1(), message: 'text1', isMe: true},
            {id: v1(), message: 'text1', isMe: true},
        ],
        ['2']:[
            {id: v1(), message: 'text2', isMe: true},
            {id: v1(), message: 'text2', isMe: true},
            {id: v1(), message: 'text2', isMe: true},
        ]
    }
    let title = 'nomatter'
    const endState: StateType = messagesReducer(startState, addDialogAC(title))
    const keys = Object.keys(endState)
    const newKey = keys.find(t=> t != "1" && t != "2" )
    if(!newKey){
        throw new Error('new key should be added')
    }
    expect(keys.length).toBe(3)
    expect(endState[newKey]).toEqual([])
})
test('messageReducer should remove messages array when dialog is removed', ()=>{
    const startState: StateType = {
        ['1']:[
            {id: v1(), message: 'text1', isMe: true},
            {id: v1(), message: 'text1', isMe: true},
            {id: v1(), message: 'text1', isMe: true},
        ],
        ['2']:[
            {id: v1(), message: 'text2', isMe: true},
            {id: v1(), message: 'text2', isMe: true},
            {id: v1(), message: 'text2', isMe: true},
        ]
    }

    const endState: StateType = messagesReducer(startState, removeDialogAC('2'))
    const keys = Object.keys(endState)
    expect(keys.length).toBe(1)
})
