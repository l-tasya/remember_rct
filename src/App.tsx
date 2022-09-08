import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home";
import {Videos} from "./components/Videos/Videos";
import {Groups} from "./components/Groups/Groups";
import {Store} from "./components/Store/Store";
import {Music} from './components/Music/Music';
import {Messenger} from "./components/Messenger/Messenger";
import {Profile} from "./components/Profile/Profile";
import {Settings} from "./components/Settings/Settings";
import styled from 'styled-components';
import {NavBar} from './components/NavBar/NavBar';s

function App() {
    const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 60px 1fr);
    grid-template-rows: repeat(1, 60px 1fr);
    height: 100vh;
    `
    const Content = styled.div`
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
        position: relative;
    `
    const ContentContainer = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    //------------------//
    padding: 15px;
    border-radius: 12px;
    margin-top: 5px;
    overflow: hidden;
    `
    return (
        <Container>

            <Header title={'FOX NETWORK'}/>
            <NavBar/>
            <Content>
                <ContentContainer>
                    <Routes>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'Videos'} element={<Videos/>}/>
                        <Route path={'Groups'} element={<Groups/>}/>
                        <Route path={'Music'} element={<Music/>}/>
                        <Route path={'Store'} element={<Store/>}/>
                        <Route path={'Messenger/*'} element={<Messenger/>}/>
                        <Route path={'Profile/*'} element={<Profile/>}/>
                        <Route path={'Settings'} element={<Settings/>}/>
                    </Routes>
                </ContentContainer>
            </Content>
        </Container>
    );
}

export default App;
