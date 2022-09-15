import React from 'react';
import {Posts} from './Posts';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/store";
import {addPostAC, likeClickAC, PostType, removePostAC} from "../../../redux/reducers/profileReducer";


export const PostsContainer = React.memo(() =>{
    let posts = useSelector<AppStateType, PostType[]>(t => t.profile.posts)
    let dispatch = useDispatch()
    const addPost =(value: string) => dispatch(addPostAC(value))
    const removePost = (postID: string) =>dispatch(removePostAC(postID))
    const likeCallback = (postID: string) =>dispatch(likeClickAC(postID))
    return <Posts posts={posts} addPost={addPost} removePost={removePost} likeCallback={likeCallback}/>
})