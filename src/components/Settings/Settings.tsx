import Button from "@mui/material/Button/Button";
import React, {useCallback, useState} from "react";
import styled from "styled-components";
import {RadioButton} from "../../common/components/Radio/Radio";
import {StyledBlock} from "../../common/styles/styles";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store/store";
import {addThemeAC, setColorAC, ThemesArrayType} from "../../redux/reducers/settingsReducer";
import JavascriptIcon from '@mui/icons-material/Javascript';
import {AddTheme} from "./AddTheme";

export const Settings = React.memo(() => {
        let themes = useSelector<AppStateType, ThemesArrayType>(t => t.settings.themes)

        let [theme, setTheme] = useState<string>('')
        let dispatch = useDispatch()
        const Container = styled(StyledBlock)`

    
`
        const Title = styled.div`
    grid-column-start: 1;
    grid-row-start: 1;
    font-size: 17px;
`
        const ColorRadio = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    display: grid;
    grid-template-columns: repeat(25, 1fr);
    grid-row-start: 2;
    align-items: center;
    margin-bottom: 5px;
`
        const ApplyButton = styled(Button)`
       grid-column-start: 3;
       grid-row-start: 3;
       width: 30px;
       justify-self: flex-end;
`
        const Icon = styled(JavascriptIcon)`
    grid-row-start: 4;
    grid-column-start: 3;
    justify-self: flex-end;
`
        const ColorPicker = styled.div`
          display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
`
        const addTheme = useCallback((value: string)=>{
            dispatch(addThemeAC(value))
        },[dispatch])
        const setColor = useCallback(()=>{
            dispatch(setColorAC(theme))
    },[dispatch, theme])
        return <Container>
            <ColorPicker>
                <Title>Select app theme</Title>
                <ColorRadio>
                    {themes.map(t => <RadioButton
                            key={t.id}
                            title={t.first}
                            c1={() => setTheme(t.id)}
                            checked={t.id === theme}
                        />
                    )}
                    <AddTheme addTheme={addTheme}/>
                </ColorRadio>
                <ApplyButton onClick={setColor} variant={'contained'}
                             size={'small'}>Apply</ApplyButton>
            </ColorPicker>
            <Icon sx={{fontSize: 30}}/>


        </Container>
    }
)