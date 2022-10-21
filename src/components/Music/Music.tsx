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
            <Container post>
                music
            </Container>
            <Container post>
                music
            </Container>
            <Container post>
                music
            </Container>
            <Container post>
                music
            </Container>
            <Container post>
                music
            </Container>
            <Container post>
                music
            </Container>
            <Container post>
                music
            </Container>
            <Container post>
                music
            </Container>

        </PaddedContentContainer>
    )
})