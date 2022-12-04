import React from 'react';
import {NavLink, NavLinkProps} from 'react-router-dom';
import styled from 'styled-components';


type MenuSelectPropsType = NavLinkProps & {
    children: any

}
const StyledItem = styled(NavLink)`
    padding: 4px 6px;
    transition: 3s;
    display: flex;
    justify-content: flex-start;
    align-items: center;    
    svg{
    font-size: 20px;
    }
`
export const MenuSelect: React.FC<MenuSelectPropsType> = ({children, ...rests}) => {

    return <StyledItem {...rests}>
        {children}
    </StyledItem>
}