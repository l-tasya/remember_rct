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
            <Container variety="post">
                store
            </Container>
            <Container variety="post">
                заглушки
            </Container>
            <Container variety="post">
                store
            </Container>
            <Container variety="post">
                store
            </Container>
        </PaddedContentContainer>
    )
})