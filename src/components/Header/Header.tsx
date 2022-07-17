import React from 'react';
import styled from 'styled-components';
import {Logo} from "./Logo/Logo";
import {Bridges} from "./Bridges/Bridges";
import {Search} from "../../common/components/Search/Search";


type HeaderPropsType = {
    title: string
}
export const Header: React.FC<HeaderPropsType> = ({title}) => {
    const ContainerGrid = styled.div`
            grid-column-start: 1;
            grid-column-end: 3;
           
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            grid-template-rows: 1fr;
    `
    const Container = styled(ContainerGrid)`
    background: white;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    z-index: 1;
    position: fixed; 
    top: 0; 
    width: 100%;
    height: 60px;
    align-items: center;
    `
    const SearchContainer = styled.div`
    grid-column-start: 4;
    position: absolute;
`
    return (
        <Container>
            <Logo title={title}/>
            <SearchContainer><Search background={'#d4ddea'} hoverColor={'#c9a3fc'}/></SearchContainer>

            <Bridges/>
        </Container>
    )
}
// <Grid container direction='row' alignItems='center'>
//
// </Grid>