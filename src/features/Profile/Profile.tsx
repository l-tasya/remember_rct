import React, {useCallback} from 'react';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import {PostsContainer} from './Tabs/Posts/PostsContainer';
import styled from 'styled-components';
import {ProfileInfoContainer} from './ProfileInfo/ProfileInfoContainer';
import Tabs from '@mui/material/Tabs/Tabs';
import Tab from '@mui/material/Tab';
import {StyledBlock} from '../../common/styles/styles';
import {Groups} from './Tabs/Groups/Groups';
import {Friends} from './Tabs/Friends/Friends';
import {About} from "./Tabs/Posts/About/About";
import {IProfile} from "../../common/types/types";

const Container = styled.div`
  grid-column-start: 2;
  display: grid;
  grid-gap: 10px;
  height: min-content;
  padding: 10px 0;
`

const PostsWrapper = styled.div`
  transition: 3s linear;
  display: grid;
  grid-gap: 8px;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
`

interface IProps {
    profile: IProfile,

}

export const Profile: React.FC<IProps> = ({profile}) => {
    return (
        <Container>
            <ProfileInfoContainer profile={profile}/>
            <ProfileTabs/>
            <Routes>
                {["/", "/posts"].map((path, index) => {
                    return (
                        <Route index path={path} element={<PostsWrapper>
                            <PostsContainer/>
                            <About profile={profile}/>

                        </PostsWrapper>}
                               key={index}
                        />
                    );
                })}
                <Route path="/friends" element={<Friends/>}/>
                <Route path="/groups" element={<Groups/>}/>
                <Route path="*" element={<div>404</div>}/>
            </Routes>
        </Container>

    )
}
const ProfileTabs = React.memo(() => {
    const location = useLocation()
    const [value, setValue] = React.useState(() => location.pathname.split('/')[3]);
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const navigate = useNavigate()
    const clickHandler = useCallback((path: string) => {
        navigate(path)
    }, [navigate])
    let path = ['/', '', 'posts'].find(t => t === value)
    return <StyledBlock padding={'none'}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Posts" value={path} onClick={() => clickHandler('posts')}/>
            <Tab label="Friends" value={"friends"} onClick={() => clickHandler('friends')}/>
            <Tab label="Groups" value={"groups"} onClick={() => clickHandler('groups')}/>
        </Tabs>
    </StyledBlock>
})