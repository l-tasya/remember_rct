import React, {useState} from "react";
import {Title} from "../../../common/styles/mui-styles";
import {RadioButton} from "../../../common/components/Radio/Radio";
import {AddTheme} from "./AddTheme";
import Button from "@mui/material/Button/Button";
import styled from "styled-components";
import {ThemesType} from "../../../redux/reducers/settingsReducer";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/store";

const ColorRadio = styled.div`
    display: grid;
    grid-template-columns: repeat(25, 1fr);
`
const ColorPicker = styled.div`
display: grid;
height: 100%;
grid-template-rows: 1fr 1fr 1fr;
    align-items: center;
`
type ThemePickerPropsType = {
    themes: ThemesType
    addTheme: (theme: string) => void
    setColor: (id: string) => void
}
export const ThemePicker: React.FC<ThemePickerPropsType> = React.memo(({themes, addTheme, setColor}) => {
        let initialActive = useSelector<AppStateType, string>(t => t.settings.active)
        let [activeID, setActiveID] = useState<string>(initialActive)
        const apply = () => {
            setColor(activeID)
        }
        return <ColorPicker>
            <Title value={"default"} style={{fontSize: 20}}>Select app theme</Title>
            <ColorRadio>
                {themes.map(t => <RadioButton
                        key={t.id}
                        title={t.first}
                        c1={() => setActiveID(t.id)}
                        checked={t.id === activeID}
                    />
                )}
                <AddTheme addTheme={addTheme}/>
            </ColorRadio>
            <div>
                <Button onClick={apply}
                        variant={"contained"}
                        size={"small"}
                >Apply</Button>
            </div>
        </ColorPicker>
    }
)