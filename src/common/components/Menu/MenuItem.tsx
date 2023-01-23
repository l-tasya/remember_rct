import {useTheme} from "@mui/material/styles";
import React from "react";
import {NavLink, NavLinkProps} from "react-router-dom";
import styled from "styled-components";


type MenuSelectPropsType = NavLinkProps & {
    children: any;
    svg?: React.ReactNode | null

}
const Content = styled(NavLink)`
    padding: 4px 6px;
    transition: 0.5s;
    display: flex;
    justify-content: flex-start;
    align-items: center;    
    svg{
    font-size: 20px;
    }
    :hover{
    transition: 0.3s;
    background: ${(props: { hover: string }) => props.hover}; 
    }
    margin-bottom: 2px;
`
export const MenuSelect: React.FC<MenuSelectPropsType> = ({children, svg, ...rests}) => {
    const theme = useTheme()
    return <Content hover={theme.palette.action.hover} {...rests}>
        {svg} {children}
    </Content>
}