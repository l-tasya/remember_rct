import React from "react";
import styled from "styled-components";


type MenuSelectPropsType = {
    children: any
}
const StyledItem = styled.div`
    padding: 4px 6px;
    transition: 3s;
    display: flex;
    justify-content: flex-start;
    align-items: center;    
    svg{
    font-size: 20px;
    }
`
export const MenuSelect: React.FC<MenuSelectPropsType> = ({children}) => {

    return <StyledItem>
        {children}
    </StyledItem>
}