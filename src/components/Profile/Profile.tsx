import React, {useEffect} from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import {Groups} from "./Groups/Groups";
import {UserInfo} from "./User/UserInfo/UserInfo";
import {PostsContainer} from "./Posts/PostsContainer";
import {ProfileUserType} from "../../redux/reducers/profileReducer";
import {Friends} from "./Friends/Friends";
import {PaddedContentContainer} from "../../common/styles/mui-styles";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store/store";

type ProfilePropsType = {
    user: ProfileUserType
}
const Container = styled.div`
margin-top: 5px;
grid-column-start: 2;
`
const Wrapper = styled(PaddedContentContainer)`
position: absolute;
height: 100%;
`
export const Profile: React.FC<ProfilePropsType> = React.memo(({user}) => {
    const isAuth = useSelector<AppStateType, boolean>(t => t.auth.isAuth);
    const navigate = useNavigate();
    useEffect(() => {
    }, [navigate, isAuth])


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