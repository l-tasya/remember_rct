import React from "react";
import {Route, Routes} from "react-router-dom";
import styled from "styled-components";
import {Groups} from "./Groups/Groups";
import {UserInfo} from "./User/UserInfo/UserInfo";
import {PostsContainer} from "./Posts/PostsContainer";
import {FriendsContainer} from "./Friends/FriendsContainer";

export const Profile = React.memo(() => {
    const Content = styled.div`

`
    return (
        <div>
            <UserInfo/>
            <Content>
                <Routes>
                    <Route path="posts" element={<PostsContainer/>}/>
                    <Route path="/" element={<PostsContainer/>}/>
                    <Route path="friends" element={<FriendsContainer/>}/>
                    <Route path="groups" element={<Groups/>}/>
                </Routes>
            </Content>
        </div>
    )
})