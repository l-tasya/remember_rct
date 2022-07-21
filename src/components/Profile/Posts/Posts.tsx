import React from "react";
import {Post} from "./Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/store";
import {addPostAC, PostType, removePostAC} from "../../../redux/reducers/profileReducer";
import {StyledInput} from "../../../common/components/StyledInput/StyledInput";

export const Posts = () => {
    let posts = useSelector<AppStateType, PostType[]>(t => t.profile.posts)
    let dispatch = useDispatch()
    return (
        <div>
            <StyledInput addPost={(value: string) => dispatch(addPostAC(value))}/>
            {posts.map(t => <Post removePost={() => dispatch(removePostAC(t.id))} key={t.id} message={t.message}
                                  time={t.time} id={t.id}/>)}
        </div>
    )
}