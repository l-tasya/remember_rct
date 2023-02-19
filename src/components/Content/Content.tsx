import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Home} from '../Home/Home';
import {ProfileContainer} from '../Profile/ProfileContainer';
import {Music} from '../Music/Music';
import {Store} from '../Store/Store';
import {Messenger} from '../Messenger/Messenger';
import {Login} from '../Login/Login';
import {UsersContainer} from '../Users/UsersContainer';
import styled from 'styled-components';
import {Settings} from '../Settings/Settings';

const Wrapper = styled.div`
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 2;
        grid-column-end: 3;
        //------------
        height: 100%;       
        position: relative;
    `
export const Content: React.FC = React.memo(() => {
        return <Wrapper>
            <Routes>
                <Route path={'remember_rct/'} element={<Home/>}/>
                <Route path={'remember_rct/home'} element={<Home/>}/>
                <Route path={'remember_rct/:userID/*'} element={<ProfileContainer/>}/>
                <Route path={'remember_rct/Music'} element={<Music/>}/>
                <Route path={'remember_rct/Store'} element={<Store/>}/>
                <Route path={'remember_rct/Messenger/*'} element={<Messenger/>}/>
                <Route path={'remember_rct/Settings/*'} element={<Settings/>}/>
                <Route path={'remember_rct/Login'} element={<Login/>}/>
                <Route path={'remember_rct/Users'} element={<UsersContainer/>}/>
            </Routes>
        </Wrapper>
    }
)