import React, {useEffect} from 'react';
import './App.scss';
import styled from 'styled-components';
import {NavBar} from './components/NavBar/NavBar';
import {Content} from './components/Content/Content';
import {useAppDispatch, useAppSelector} from './common/hook/hooks';
import {Header} from './components/Header/Header';
import {initializeApp} from './redux/reducers/appReducer';
import {Loading} from './common/components/Loading/Loading';
import {CircularProgress} from "@mui/material";


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
const title = 'TASYA NETWORK';
export const stylesForLoading = {
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
}
const App: React.FC = () => {
    const dispatch = useAppDispatch()
    const init = useAppSelector(t => t.app.initialize)
    useEffect(() => {
        dispatch(initializeApp())
    }, []);

    return (
        <>
            {(init === 'loading') ? <div
                    style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
                    <CircularProgress/>
                </div>
                :
                (init === 'succeeded') ? <Wrapper>
                        <Header title={title}/>
                        <NavBar/><Content/>
                    </Wrapper>
                    :
                    (init === 'failed') && <Loading/>}
        </>

    )
        ;
}


export default App;
