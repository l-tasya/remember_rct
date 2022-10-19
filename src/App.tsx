import React, {useContext, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Home} from "./components/Home/Home";
import {Store} from "./components/Store/Store";
import {Music} from './components/Music/Music';
import {Messenger} from "./components/Messenger/Messenger";
import {Settings} from "./components/Settings/Settings";
import styled from 'styled-components';
import {NavBar} from './components/NavBar/NavBar';
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {UsersContainer} from './components/Users/UsersContainer';
import {useSelector} from "react-redux";
import {AppStateType} from "./redux/store/store";
import {ThemesArrayType} from "./redux/reducers/settingsReducer";
import {ColorModeContext} from "./ToggleColor";


const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 60px 1fr);
    grid-template-rows: repeat(1, 60px 1fr);
    height: 100vh;
    `
const Content = styled.div`
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 2;
        grid-column-end: 3;
        //------------
        height: 100%;      
        background: #f5f5f5;  
        position: relative;
    `
const App = React.memo(() => {
        let themeMode = useContext(ColorModeContext)
        let themes = useSelector<AppStateType, ThemesArrayType>(t => t.settings.themes)
        let active = useSelector<AppStateType, string>(t => t.settings.active)
        useEffect(() => {
            let color = themes.find(t => t.id === active)
            if (color) {
                themeMode.toggleColorMode(color.first)
            }
        }, [themeMode, active, themes])
        return (
            <Container>
                <Header title={'TASYA NETWORK'}/>
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
