import Button from "@mui/material/Button/Button";
import React, {useState} from "react";
import styled from "styled-components";
import {RadioButton} from "../../common/components/Radio/Radio";
import {StyledBlock} from "../../common/styles/styles";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store/store";
import {setColorAC, ThemesArrayType} from "../../redux/reducers/settingsReducer";
import JavascriptIcon from '@mui/icons-material/Javascript';
export type ColorValueType =
    | 'purple'
    | 'green'
    | 'blue'
    | 'red'
    | 'pink';
export const Settings = React.memo(() => {
    let themes = useSelector<AppStateType, ThemesArrayType>(t=>t.settings.themes)
    let dispatch = useDispatch()
    const SettingContainer = styled(StyledBlock)`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    
`
    const Title = styled.div`
    grid-column-start: 1;
    grid-row-start: 1;
    font-size: 17px;
`
    const ColorSelectContainer = styled.div`
    grid-column-start: 1;
    grid-row-start: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
`
    const ApplyButton = styled(Button)`
       grid-column-start: 1;
       grid-row-start: 3;
       width: 30px;
       justify-self: flex-end;
`
    const Icon = styled(JavascriptIcon)`
    grid-row-start: 4;
    grid-column-start: 3;
    justify-self: flex-end;
`
    let [value, setValue] = useState<ColorValueType>('blue')
    return <SettingContainer>
        <Title>Select app theme</Title>
        <ColorSelectContainer>
            {themes.map(t => <RadioButton title={t.second} c1={() => setValue(t.value)}
                                               checked={t.value === value}/>)}
        </ColorSelectContainer>
        <ApplyButton onClick={()=>dispatch(setColorAC(value))} variant={'contained'} size={'small'}>Apply</ApplyButton>
        <Icon sx={{fontSize: 30}}/>
    </SettingContainer>
}
)