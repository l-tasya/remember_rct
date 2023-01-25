import React from "react";
import {PaddedContentContainer} from "../../common/styles/mui-styles";
import {SettingsNavBar} from "./Nav/SettingsNavBar";
import {Route, Routes} from "react-router-dom";
import {ThemePickerContainer} from "./ThemePicker/ThemePickerContainer";
import {StyledBlock} from "../../common/styles/styles";


type SettingsPropsType = {}
export const Settings: React.FC<SettingsPropsType> = React.memo(({}) => {

    //TODO: Personal Info Component
        return <PaddedContentContainer>
            <SettingsNavBar/>
            <StyledBlock id={"container"} variety="post">
                <Routes>
                    <Route path={"theme"} element={<ThemePickerContainer/>}/>
                    <Route path={"personal-info"}/>
                </Routes>
            </StyledBlock>
        </PaddedContentContainer>
    }
)