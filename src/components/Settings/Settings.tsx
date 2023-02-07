import React from "react";
import {PaddedContentContainer} from "../../common/styles/mui-styles";
import {SettingsNavBar} from "./Nav/SettingsNavBar";
import {Route, Routes} from "react-router-dom";
import {ThemePickerContainer} from "./ThemePicker/ThemePickerContainer";
import {EditProfileContainer} from "./EditProfile/EditProfileContainer";
import styled from "styled-components";
import {StyledBlock} from "../../common/styles/styles";
import {Main} from "./SettingsMain/Main";


const Content = styled(StyledBlock)``
export const Settings: React.FC = () => {
    return <PaddedContentContainer style={{height: "auto", gridTemplateColumns: "1fr 3fr 2fr"}}>
        <SettingsNavBar/>
        <Content id={"container"}>
            <Routes>
                <Route path={"/"} element={<Main/>}/>
                <Route path={"/theme"} element={<ThemePickerContainer/>}/>
                <Route path={"/personal-info"} element={<EditProfileContainer/>}/>
            </Routes>
        </Content>
    </PaddedContentContainer>
}