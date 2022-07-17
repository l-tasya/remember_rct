import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home";
import {Videos} from "./components/Videos/Videos";
import {Groups} from "./components/Groups/Groups";
import {Store} from "./components/Store/Store";
import {Music} from './components/Music/Music';
import {Messages} from "./components/Messages/Messages";
import {Profile} from "./components/Profile/Profile";
import {Settings} from "./components/Settings/Settings";
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import {NavBar} from './components/NavBar/NavBar';

function App() {
    const GridContainer = styled(Grid)`
    display: grid;
    grid-template-columns: repeat(1, 60px 1fr);
    grid-template-rows: repeat(1, 60px 1fr);
    height: 100vh;
    `


    const HeaderEl = styled(Header)`

    `
    const NavBarEl = styled(NavBar)`
 
    `
    const ContentContainer = styled.div`
        display: grid;
        grid-template-columns: 1fr 4fr 1fr;
        grid-template-rows: 1fr;
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 2;
        grid-column-end: 3;
        //------------
        height: 100%;
        background: #f5f5f5;
        
    `
    const ContentItem = styled.div`
    grid-column-start: 2;
    //------------------//
    background: #303846;
    border-radius: 12px;
    margin-top: 5px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
    overflow: hidden;
    `
    return (
        <GridContainer>

            <HeaderEl title={'FOX NETWORK'}/>
            <NavBarEl/>
            <ContentContainer>
                <ContentItem>
                    <Routes>
                        <Route path={'/Home'} element={<Home/>}/>
                        <Route path={'/Videos'} element={<Videos/>}/>
                        <Route path={'/Groups'} element={<Groups/>}/>
                        <Route path={'/Store'} element={<Store/>}/>
                        <Route path={'/Music'} element={<Music/>}/>
                        <Route path={'/Messages'} element={<Messages/>}/>
                        <Route path={'/Profile'} element={<Profile/>}/>
                        <Route path={'/Settings'} element={<Settings/>}/>
                    </Routes>
                </ContentItem>
            </ContentContainer>
        </GridContainer>
    );
}

export default App;
