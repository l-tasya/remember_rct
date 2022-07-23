import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store/store";
import {ThemeColorType} from "../../redux/reducers/settingsReducer";


export const Dialogs = () => {
    let color = useSelector<AppStateType, ThemeColorType>(t=>t.settings.themeColor)
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
    const ItemsContainer = styled.div`
    display: grid;
    border-right: 0.3px solid rgb(211,211,211, 0.3);
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(20, 50px);
    overflow-y: scroll;
    //firefox
    scrollbar-color: ${color.first} white;
    scrollbar-width: thin;
    //google chrome
    ::-webkit-scrollbar {
    height: 10px;
    width: 5px;
    background: white;
    
}

::-webkit-scrollbar-thumb {
    background: ${color.first};
}

::-webkit-scrollbar-corner {
    background: #000;
}
`
    const DialogContainer = styled.div`
        background: white;
`

    return (
        <Container>
            <ItemsContainer>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
            </ItemsContainer>
            <DialogContainer>
                dialog
            </DialogContainer>
        </Container>
    )
}