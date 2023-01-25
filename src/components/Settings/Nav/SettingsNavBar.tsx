import styled from "styled-components";
import React from "react";
import {NavLink} from "react-router-dom";
import {StyledBlock} from "../../../common/styles/styles";


const Container = styled.nav`
grid-column-start: 1;
display: grid;
margin-top: 8px;
grid-auto-rows: minmax(30px, 50px);
grid-gap: 8px;
justify-content: flex-end;
`
const NavItem = styled(StyledBlock)`
    background: red;
    padding: 2px 8px;
    height: 30px;
    margin-right: 8px;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    
`
export const SettingsNavBar: React.FC = React.memo(() => {
        //TODO: active styles for navItem
        return <Container>
            <NavItem><NavLink to={"theme"}>Theme</NavLink></NavItem>
            <NavItem><NavLink to={"personal-info"}>Personal Info</NavLink></NavItem>

        </Container>
    }
)