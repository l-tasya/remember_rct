import React from "react";
import {StyledBlock} from "../../common/styles/styles";
import styled from "styled-components";
import {PaddedContentContainer} from "../../common/styles/mui-styles";

const Container = styled(StyledBlock)`
  grid-column-start: 2;
  div{
  font-size: inherit;
  }
`
export const Home = React.memo(() => {

    return (<PaddedContentContainer>
            <Container variety="post">
                <div>home</div>
            </Container>
            <Container variety="post">
                <div>home</div>
            </Container>
            <Container variety="post">
                <div>home</div>
            </Container>
            <Container variety="post">
                <div>home</div>
            </Container>
            <Container variety="post">
                <div>home</div>
            </Container>
        </PaddedContentContainer>
    )
})