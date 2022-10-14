import React from "react";
import {Route, Routes} from "react-router-dom";
import {Groups} from "./Groups/Groups";
import {UserInfo} from "./User/UserInfo/UserInfo";
import {PostsContainer} from "./Posts/PostsContainer";
import {ProfileUserType} from "../../redux/reducers/profileReducer";
import {Friends} from "./Friends/Friends";
import {PaddedContentContainer} from "../../common/styles/styles";

type ProfilePropsType = {
    user: ProfileUserType
}
export const Profile: React.FC<ProfilePropsType> = React.memo(({user}) => {

    return (
        <PaddedContentContainer>
            <UserInfo user={user} />
            <Routes>
                    <Route path="/" element={<PostsContainer/>}/>
                    <Route path="/posts" element={<PostsContainer/>}/>
                    <Route path="/friends" element={<Friends/>}/>
                    <Route path="/groups" element={<Groups/>}/>
            </Routes>
        </PaddedContentContainer>
    )
})