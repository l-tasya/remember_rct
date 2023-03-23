import React, {useCallback} from "react";
import {Posts} from "./Posts";
import {addPostAC, likeClickAC, removePostAC} from "../../profileReducer";
import {useAppDispatch, useAppSelector} from "../../../../common/hook/hooks";


export const PostsContainer = () => {
    let posts = useAppSelector(t => t.profile.posts)

    let dispatch = useAppDispatch()

    const addPost = useCallback((value: string) => {
        dispatch(addPostAC(value))
    }, [dispatch])

    const removePost = useCallback((postID: string) => dispatch(removePostAC(postID)), [dispatch])

    const likeCallback = useCallback((postID: string) => dispatch(likeClickAC(postID)), [dispatch])

    return <Posts posts={posts} addPost={addPost} removePost={removePost} likeCallback={likeCallback}/>
}