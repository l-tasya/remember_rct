import React from "react";
import styled from "styled-components";
import logo from '../../../common/img/Purple_Fox.png';
type LogoPropsType = {
    title: string
}
export const Logo: React.FC<LogoPropsType> = ({title}) => {
    const Container = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    display: flex;
    align-items: center;
    justify-content: start;
    `
    const AppLogo = styled.img`
    width: 60px;
    `
    const AppTitle = styled.div`
    font-weight: 900;
    font-size: 18px;
    color: #7c5ba1;
    `
    return (<Container>
            <AppLogo src={logo} alt="logo doest exist"/>
            <AppTitle>{title}</AppTitle>
        </Container>
    )
}