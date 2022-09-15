import React from "react";
import {Route, Routes} from "react-router-dom";
import styled from "styled-components";
import {Groups} from "./Groups/Groups";
import {UserInfo} from "./User/UserInfo/UserInfo";
import {PostsContainer} from "./Posts/PostsContainer";
import {ProfileUserType} from "../../redux/reducers/profileReducer";
import {Friends} from "./Friends/Friends";

type ProfilePropsType = {
    user: ProfileUserType
}
export const Profile: React.FC<ProfilePropsType> = React.memo(({user}) => {
    const Content = styled.div`

`
    return (
        <div>
            <UserInfo user={user} />
            <Content>
                <Routes>
                    <Route path="/" element={<PostsContainer/>}/>
                    <Route path="/posts" element={<PostsContainer/>}/>
                    <Route path="/friends" element={<Friends/>}/>
                    <Route path="/groups" element={<Groups/>}/>
                </Routes>
            </Content>
        </div>
    )
})