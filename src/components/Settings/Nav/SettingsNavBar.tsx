import styled from "styled-components";
import React from "react";
import {NavLink} from "react-router-dom";


const Container = styled.nav`
grid-column-start: 1;
display: grid;
grid-auto-rows: 30px;
grid-gap:16px;
justify-content: flex-end;
a{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    margin-right: 8px;
    text-align: center;
}
`
export const SettingsNavBar: React.FC = () => {
    let nonActive = {
        boxShadow: "none",
        borderRadius: "0.3rem",
        background: "transparent",
        transition: "0.3s",
        padding: "2px 8px",
    }
    let active = {
        boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
        borderRadius: "0.3rem",
        padding: "2px 8px",
        background: "white",
        transition: "0.3s",
    }
    return <Container>
        <NavLink style={({isActive}) => isActive ? active : nonActive} end
                 to={"/remember_rct/settings"}>Home</NavLink>
        <NavLink style={({isActive}) => isActive ? active : nonActive} to={"theme"}>Theme</NavLink>
        <NavLink style={({isActive}) => isActive ? active : nonActive} to={"personal-info"}>Personal Info</NavLink>
    </Container>
}