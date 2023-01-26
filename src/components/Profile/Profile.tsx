import React from "react";
import {Route, Routes} from "react-router-dom";
import {Groups} from "./Groups/Groups";
import {PostsContainer} from "./Posts/PostsContainer";
import {Friends} from "./Friends/Friends";
import {PaddedContentContainer} from "../../common/styles/mui-styles";
import styled from "styled-components";
import {ProfileInfoContainer} from "./ProfileInfo/ProfileInfoContainer";

type ProfilePropsType = {}
const Container = styled.div`
margin-top: 5px;
grid-column-start: 2;
`
const Wrapper = styled(PaddedContentContainer)`
position: absolute;
height: 100%;
`
export const Profile: React.FC<ProfilePropsType> = React.memo(() => {
    return (
        <Wrapper>
            <Container>
                <ProfileInfoContainer/>
                <Routes>
                    <Route path="/" element={<PostsContainer/>}/>
                    <Route path="/posts" element={<PostsContainer/>}/>
                    <Route path="/friends" element={<Friends/>}/>
                    <Route path="/groups" element={<Groups/>}/>
                </Routes>
            </Container>
        </Wrapper>
    )
})