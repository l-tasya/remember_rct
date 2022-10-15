import React from "react";
import {PaddedContentContainer, StyledBlock} from "../../common/styles/styles";
import styled from "styled-components";

const Container = styled(StyledBlock)`
  grid-column-start: 2;
`
export const Home = React.memo(() => {

    return (<PaddedContentContainer>
            <Container post>
                <div>home</div>
            </Container>
            <Container post>
                <div>home</div>
            </Container>
            <Container post>
                <div>home</div>
            </Container>
            <Container post>
                <div>home</div>
            </Container>
            <Container post>
                <div>home</div>
            </Container>
        </PaddedContentContainer>
    )
})