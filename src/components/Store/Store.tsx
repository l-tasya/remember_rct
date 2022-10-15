import React from "react";
import {PaddedContentContainer, StyledBlock} from "../../common/styles/styles";
import styled from "styled-components";


const Container = styled(StyledBlock)`
  grid-column-start: 2;
  margin: 15px;
  height: 200px;
   
`
export const Store = React.memo(() => {
    return (
        <PaddedContentContainer>
            <Container>
                store
            </Container>
            <Container>
                заглушки
            </Container>
            <Container>
                store
            </Container>
            <Container>
                store
            </Container>
        </PaddedContentContainer>
    )
})