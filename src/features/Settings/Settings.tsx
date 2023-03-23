import React from "react";
import {PaddedContentContainer} from "../../common/styles/mui-styles";
import {SettingsNavBar} from "./Nav/SettingsNavBar";
import {Route, Routes} from "react-router-dom";
import {ThemePickerContainer} from "./Tabs/ThemePicker/ThemePickerContainer";
import {EditProfileContainer} from "./Tabs/EditProfile/EditProfileContainer";
import styled from "styled-components";
import {StyledBlock} from "../../common/styles/styles";
import {Main} from "./Tabs/SettingsMain/Main";


const Content = styled(StyledBlock)``
export const Settings: React.FC = () => {
    return <PaddedContentContainer style={{height: "auto", gridTemplateColumns: "1fr 3fr 2fr"}}>
        <SettingsNavBar/>
        <Content id={"container"}>
            <Routes>
                {["/", ""].map((path, index) => {
                    return (
                        <Route index path={path} element={<Main/>}
                               key={index}
                        />
                    );
                })}
                <Route path={"theme"} element={<ThemePickerContainer/>}/>
                <Route path={"personal-info"} element={<EditProfileContainer/>}/>
            </Routes>
        </Content>
    </PaddedContentContainer>
}