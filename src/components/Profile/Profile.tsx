import React from "react";
import {Route, Routes} from "react-router-dom";
import {Groups} from "./Groups/Groups";
import {UserInfo} from "./User/UserInfo/UserInfo";
import {PostsContainer} from "./Posts/PostsContainer";
import {ProfileUserType} from "../../redux/reducers/profileReducer";
import {Friends} from "./Friends/Friends";
import {PaddedContentContainer} from "../../common/styles/styles";
import styled from "styled-components";

type ProfilePropsType = {
    user: ProfileUserType
}
const Container = styled.div`
grid-column-start: 2;
`
const Wrapper = styled(PaddedContentContainer)`
position: absolute;
height: 100%;
`
export const Profile: React.FC<ProfilePropsType> = React.memo(({user}) => {

    return (
        <Wrapper>
            <Container>
                <UserInfo user={user}/>
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