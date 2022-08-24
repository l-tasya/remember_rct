import React from "react";
import {Route, Routes} from "react-router-dom";
import styled from "styled-components";
import {Friends} from "./Friends/Friends";
import {Groups} from "./Groups/Groups";
import {UserInfo} from "./User/UserInfo/UserInfo";
import {PostsContainer} from "./Posts/PostsContainer";

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
                    <Route path="friends" element={<Friends/>}/>
                    <Route path="groups" element={<Groups/>}/>
                </Routes>
            </Content>
        </div>
    )
})