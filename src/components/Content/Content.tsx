import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Home} from '../Home/Home';
import {Music} from '../Music/Music';
import {Store} from '../Store/Store';
import {Messenger} from '../Messenger/Messenger';
import {UsersContainer} from '../Users/UsersContainer';
import styled from 'styled-components';
import {Settings} from '../Settings/Settings';
import {ErrorSnackbar} from '../../common/components/ErrorSnackbar/ErrorSnackbar';
import {AlertSnackbar} from '../../common/components/AlertSnackbar/AlertSnackbar';
import {Login} from '../../common/components/Login/Login';
import {Profile} from "../Profile/Profile";
import {Loading} from "../../common/components/Loading/Loading";

const Wrapper = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
  //------------
  height: 100%;
  position: relative;
`
export const Content: React.FC = () => {
    return <Wrapper>
        <Loading/>
        <Routes>
            <Route path={"remember_rct/"}>
                <Route index element={<Home/>}/>
                <Route path={'store'} element={<Store/>}/>
                <Route path={'messenger/*'} element={<Messenger/>}/>
                <Route path={'music'} element={<Music/>}/>
                <Route path={'users'} element={<UsersContainer/>}/>
                <Route path={'settings/*'} element={<Settings/>}/>
                <Route path={'login'} element={<Login/>}/>
                <Route path={':userID/*'} element={<Profile/>}/>
            </Route>
            <Route path={'*'} element={<h1> 404 Page Not Found</h1>}/>

        </Routes>
        <ErrorSnackbar/>
        <AlertSnackbar/>
    </Wrapper>
}