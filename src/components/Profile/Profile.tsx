import React from 'react';
import {Route, Routes} from 'react-router-dom';
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
grid-gap: 10px
`
const Wrapper = styled(PaddedContentContainer)`
position: absolute;
height: 100%;
`
export const Profile: React.FC = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Wrapper>
            <Container>
                <ProfileInfoContainer/>
                <StyledBlock padding={'none'}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Posts"/>
                        <Tab label="Friends"/>
                        <Tab label="Groups"/>
                    </Tabs>
                </StyledBlock>
                <Routes>
                    <Route path="/" element={<PostsContainer/>}/>
                    <Route path="/posts" element={<PostsContainer/>}/>
                    <Route path="/friends" element={<Friends/>}/>
                    <Route path="/groups" element={<Groups/>}/>
                </Routes>
            </Container>
        </Wrapper>
    )
}