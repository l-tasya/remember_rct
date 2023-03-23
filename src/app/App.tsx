import React, {useEffect} from 'react';
import './App.scss';
import styled from 'styled-components';
import {NavBar} from '../components/NavBar/NavBar';
import {useAppDispatch, useAppSelector} from '../common/hook/hooks';
import {Header} from '../components/Header/Header';
import {initializeApp} from '../features/App/appReducer';
import {Loading} from '../components/Loading/Loading';
import {CircularProgress} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import {Home} from "../features/Home/Home";
import {Messenger} from "../features/Messenger/Messenger";
import {UsersContainer} from "../features/Users/UsersContainer";
import {Settings} from "../features/Settings/Settings";
import {Login} from "../components/Login/Login";
import {ErrorSnackbar} from "../components/ErrorSnackbar/ErrorSnackbar";
import {AlertSnackbar} from "../components/AlertSnackbar/AlertSnackbar";
import {ProfileContainer} from "../features/Profile/ProfileContainer";

const Content = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
  //------------
  height: 100%;
  position: relative;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 65px 1fr;
  grid-template-rows: 65px 1fr;
  height: 100vh;
  overflow-y: hidden;
  grid-template-areas: 
    "header header"
    "navbar content";
`

const App: React.FC = () => {
    console.log('App')
    const dispatch = useAppDispatch()
    const init = useAppSelector(t => t.app.initialize)
    useEffect(() => {
        dispatch(initializeApp())
    }, [dispatch]);
    if (init === 'loading') {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }
    return (
        <>{
            (init === 'succeeded') ? <Wrapper>
                    <Header title={'T4SYA NETWORK'}/>
                    <NavBar/><Content>
                    <Loading/>
                    <Routes>
                        <Route path={"remember_rct/"}>
                            <Route index element={<Home/>}/>
                            <Route path={'messenger/*'} element={<Messenger/>}/>
                            <Route path={'users'} element={<UsersContainer/>}/>
                            <Route path={'settings/*'} element={<Settings/>}/>
                            <Route path={'login'} element={<Login/>}/>
                            <Route path={':userID/*'} element={<ProfileContainer/>}/>
                        </Route>
                        <Route path={'*'} element={<h1> 404 Page Not Found</h1>}/>

                    </Routes>
                    <ErrorSnackbar/>
                    <AlertSnackbar/>
                </Content>
                </Wrapper>
                :
                (init === 'failed') && <Loading/>}
        </>

    )
        ;
}


export default App;
