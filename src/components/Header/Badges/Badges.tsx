import React from "react";
import styled from "styled-components";
import {Menu} from "../../../common/components/Menu/Menu";


export const Badges = () =>{
    const Container = styled.div`
        grid-column-start: 7;
        grid-column-end:9;
        display: flex;
        align-items: center;
        justify-content: space-between;`
    return <Container>
        <Menu icon={"store"} items={['1','2','3']}/>
        <Menu icon={"hangouts"} items={['1','2','3']}/>
        <Menu icon={"profile"} items={['1','2','3']}/>
    </Container>
}