import React from "react";
import styled from "styled-components";
import {ContentContainerWithoutPadding} from "../../common/styles/mui-styles";
import {StyledBlock} from "../../common/styles/styles";
import {DialogsContainer} from "./Dialogs/DialogsContainer";
import {MessagesContainer} from "./Messages/MessagesContainer";
import {withAuthRedirect} from "../../common/hoc/WithAuthRedirect";

const Container = styled(StyledBlock)`
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 2fr 6fr;
        `
const ContainerWithoutPadding = styled(ContentContainerWithoutPadding)`
`
export const Messenger = React.memo(withAuthRedirect(() => {
        return (
            <ContainerWithoutPadding>
                <Container padding={"none"} elevation={"none"} radius={0}>
                    <DialogsContainer/>
                    <MessagesContainer/>
                </Container>
            </ContainerWithoutPadding>
        )
    }
))