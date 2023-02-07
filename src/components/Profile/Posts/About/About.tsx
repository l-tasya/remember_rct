import React from "react";
import styled from "styled-components";
import {StyledTitle} from "../../../../common/styles/mui-styles";
import {StyledBlock} from "../../../../common/styles/styles";


interface IProps {

}

const Wrapper = styled(StyledBlock)`
    display: block;
    height: 300px;
    min-width: 200px;
`
export const About: React.FC<IProps> = React.memo(() => {
    return <Wrapper>
        <StyledTitle value={"main"} sx={{fontWeight: 700}}>About:</StyledTitle>
        <div>Friends: <StyledTitle value={"light"}>5,344+</StyledTitle></div>
        <div>Groups: <StyledTitle value={"light"}>344</StyledTitle></div>
        <div>Live in: <StyledTitle value={"light"}>...</StyledTitle></div>
        <div>From: <StyledTitle value={"light"}>...</StyledTitle></div>
        <div>Followers: <StyledTitle value={"light"}>999,999+</StyledTitle></div>
    </Wrapper>
})


