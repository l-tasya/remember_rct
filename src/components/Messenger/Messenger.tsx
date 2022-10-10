import React from "react";
import styled from "styled-components";
import {DialogsContainer} from "./Dialogs/DialogsContainer";
import {MessagesContainer} from "./Messages/MessagesContainer";


export const Messenger = React.memo(() => {

        const Container = styled.div`
    background: white;
    display: grid;
    grid-template-columns: 1fr 7fr;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0.3px solid rgb(211,211,211, 0.3)
`


        return (
            <Container>
                <DialogsContainer/>
                <MessagesContainer/>
            </Container>
        )
    }
)