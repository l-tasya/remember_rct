import React, {useCallback} from 'react';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import {Groups} from './Groups/Groups';
import {PostsContainer} from './Posts/PostsContainer';
import {Friends} from './Friends/Friends';
import {PaddedContentContainer} from '../../common/styles/mui-styles';
import styled from 'styled-components';
import {ProfileInfoContainer} from './ProfileInfo/ProfileInfoContainer';
import Tabs from '@mui/material/Tabs/Tabs';
import Tab from '@mui/material/Tab';
import {StyledBlock} from '../../common/styles/styles';

const Container = styled.div`
  margin-top: 5px;
  grid-column-start: 2;
  display: grid;
  grid-gap: 10px;
  height: min-content;
`
const Wrapper = styled(PaddedContentContainer)`
  position: absolute;
  height: 100%;
`
export const Profile: React.FC = () => {
    const location = useLocation()

    const [value, setValue] = React.useState(() => location.pathname.split('/')[3]);
    console.log('Profile')
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const navigate = useNavigate()
    const clickHandler = useCallback((path: string) => {
        navigate(path)
    }, [navigate])
    let path = ['/', '', 'posts'].find(t => t === value)
    return (
        <Wrapper>
            <Container>
                <ProfileInfoContainer/>
                <StyledBlock padding={'none'}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Posts" value={path} onClick={() => clickHandler('posts')}/>
                        <Tab label="Friends" value={"friends"} onClick={() => clickHandler('friends')}/>
                        <Tab label="Groups" value={"groups"} onClick={() => clickHandler('groups')}/>
                    </Tabs>
                </StyledBlock>
                <Routes>
                    {["/", "/posts"].map((path, index) => {
                        return (
                            <Route index path={path} element={<PostsContainer/>}
                                   key={index}
                            />
                        );
                    })}
                    <Route path="/friends" element={<Friends/>}/>
                    <Route path="/groups" element={<Groups/>}/>
                    <Route path="*" element={<div>404</div>}/>
                </Routes>
            </Container>
        </Wrapper>
    )
}