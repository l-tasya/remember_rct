import React from "react";
import styled from "styled-components";
import {PaddedContentContainer} from "../../common/styles/mui-styles";
import {StyledBlock} from "../../common/styles/styles";


const Container = styled(StyledBlock)`
  grid-column-start: 2;
`
export const Music = React.memo(() => {
    return (
        <PaddedContentContainer>
            <Container variety="post">
                music
            </Container>
            <Container variety="post">
                music
            </Container>
            <Container variety="post">
                music
            </Container>
            <Container variety="post">
                music
            </Container>
            <Container variety="post">
                music
            </Container>
            <Container variety="post">
                music
            </Container>
            <Container variety="post">
                music
            </Container>
            <Container variety="post">
                music
            </Container>

        </PaddedContentContainer>
    )
})