import {v1} from "uuid";
import {addMessage, messagesReducer, StateType} from "./messagesReducer";

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
    const endState: StateType = messagesReducer(startState, addMessage('1',newValue,true))
    expect(endState['1'].length).toBe(4)
    expect(endState['1'][endState['1'].length-1].message).toBe(newValue)

})