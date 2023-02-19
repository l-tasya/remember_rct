import React, {useEffect} from 'react';
import './App.scss';
import styled from 'styled-components';
import {NavBar} from './components/NavBar/NavBar';
import {HeaderContainer} from './components/Header/HeaderContainer';
import {Content} from './components/Content/Content';
import {fetchLoginTC} from './redux/reducers/authReducer';
import {useAppDispatch} from './common/hook/hooks';


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
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchLoginTC())

    }, []);
    return (
        <Wrapper>
            <HeaderContainer/>
            <NavBar/><Content/>
        </Wrapper>
    );
}


export default App;
