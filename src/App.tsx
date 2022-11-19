import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.scss';
import {Home} from "./components/Home/Home";
import {Store} from "./components/Store/Store";
import {Music} from './components/Music/Music';
import {Messenger} from "./components/Messenger/Messenger";
import {Settings} from "./components/Settings/Settings";
import styled from 'styled-components';
import {NavBar} from './components/NavBar/NavBar';
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {UsersContainer} from './components/Users/UsersContainer';
import {HeaderContainer} from "./components/Header/HeaderContainer";


const Container = styled.div`
    display: grid;
    grid-template-columns: 65px 1fr; 
    grid-template-rows: 65px 1fr; 
    height: 100vh;
    overflow-y: hidden;
    grid-template-areas: 
    "header header"
    "navbar content"; 
    `
const Content = styled.div`
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 2;
        grid-column-end: 3;
        //------------
        height: 100%;       
        position: relative;
    `
const App = React.memo(() => {
        return (
            <Container>
                <HeaderContainer title={'TASYA NETWORK'}/>
                <NavBar/>
                <Content>
                    <Routes>
                        <Route path={'remember_rct/'} element={<Home/>}/>
                        <Route path={'remember_rct/:userID/*'} element={<ProfileContainer/>}/>
                        <Route path={'remember_rct/Music'} element={<Music/>}/>
                        <Route path={'remember_rct/Store'} element={<Store/>}/>
                        <Route path={'remember_rct/Messenger/*'} element={<Messenger/>}/>
                        <Route path={'remember_rct/Settings'} element={<Settings/>}/>
                        <Route path={'remember_rct/Users'} element={<UsersContainer columns={4} rows={3}/>}/>
                    </Routes>
                </Content>
            </Container>
        );
    }
)

export default App;
