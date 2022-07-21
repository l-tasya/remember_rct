import React from "react";
import {Route, Routes} from "react-router-dom";
import styled from "styled-components";
import {Friends} from "./Friends/Friends";
import {Groups} from "./Groups/Groups";
import {Posts} from "./Posts/Posts";
import {UserInfo} from "./User/UserInfo/UserInfo";
import {StyledBlock} from "../../common/styles/styles";

export const Profile = () => {
    const Content = styled(StyledBlock)`
        margin-top: 10px;
        padding: 20px;
`
    return (
        <div>
            <UserInfo/>
            <Content>
                <Routes>
                    <Route path="posts" element={<Posts/>}/>
                    <Route path="friends" element={<Friends/>}/>
                    <Route path="groups" element={<Groups/>}/>
                </Routes>
            </Content>
        </div>
    )
}