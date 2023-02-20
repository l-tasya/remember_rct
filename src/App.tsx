import React, {useEffect} from 'react';
import './App.scss';
import styled from 'styled-components';
import {NavBar} from './components/NavBar/NavBar';
import {Content} from './components/Content/Content';
import {fetchLoginTC} from './redux/reducers/authReducer';
import {useAppDispatch} from './common/hook/hooks';
import {Header} from './components/Header/Header';


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

    useEffect(() => {
        dispatch(fetchLoginTC())

    });
    return (
        <Wrapper>
            <Header title={title}/>
            <NavBar/><Content/>
        </Wrapper>
    );
}


export default App;
