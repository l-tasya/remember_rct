import React, { useCallback } from 'react';
import {Posts} from './Posts';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/store";
import {addPostAC, likeClickAC, PostType, removePostAC} from "../../../redux/reducers/profileReducer";


export const PostsContainer = React.memo(() =>{
    let posts = useSelector<AppStateType, PostType[]>(t => t.profile.posts)
    let dispatch = useDispatch()
    const addPost = useCallback((value: string) => {
        dispatch(addPostAC(value))
    },[dispatch])
    const removePost = useCallback((postID: string) =>dispatch(removePostAC(postID)),[dispatch])
    const likeCallback = useCallback((postID: string) =>dispatch(likeClickAC(postID)),[dispatch])
    return <Posts posts={posts} addPost={addPost} removePost={removePost} likeCallback={likeCallback}/>
})