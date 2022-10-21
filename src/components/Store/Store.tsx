import React from "react";
import {StyledBlock} from "../../common/styles/styles";
import styled from "styled-components";
import {PaddedContentContainer} from "../../common/styles/mui-styles";


const Container = styled(StyledBlock)`
  grid-column-start: 2;
   
`
export const Store = React.memo(() => {
    return (
        <PaddedContentContainer>
            <Container post>
                store
            </Container>
            <Container post>
                заглушки
            </Container>
            <Container post>
                store
            </Container>
            <Container post>
                store
            </Container>
        </PaddedContentContainer>
    )
})