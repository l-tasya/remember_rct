import React, {useState} from "react";
import {Post, PostType} from "./Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/store";
import {addPostAC} from "../../../redux/reducers/profileReducer";

export const Posts = () => {
    let posts = useSelector<AppStateType, PostType[]>(t=>t.profile.posts)
    let dispatch = useDispatch()
    let [value, setValue] = useState<string>('')
    let addPost = () =>{
        dispatch(addPostAC(value))
        setValue('')
    }
    const EnterKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) =>{
        if(e.key === "Enter"){
            addPost()

        }
    }
    return (
        <div>
            <input type="text" value={value} onKeyDown={(e)=>EnterKeyPressHandler(e)} onChange={e => setValue(e.currentTarget.value)}/>
            <button onClick={addPost} >add</button>
            {posts.map(t=><Post key={t.id} message={t.message} time={t.time} id={t.id}/>)}
        </div>
    )
}