import React, {useCallback, useContext} from "react";
import {ThemePicker} from "./ThemePicker";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/store";
import {addThemeAC, setColorAC, ThemesType} from "../../../redux/reducers/settingsReducer";
import {ColorModeContext} from "../../../ToggleColor";


export const ThemePickerContainer: React.FC = () => {
    let themes = useSelector<AppStateType, ThemesType>(t => t.settings.themes)
    let dispatch = useDispatch()
    const addTheme = useCallback((value: string) => {
        dispatch(addThemeAC(value))
    }, [dispatch])
    let themeMode = useContext(ColorModeContext)
    const setColor = useCallback((id: string) => {
        let color = themes.find(t => t.id === id)?.first;
        dispatch(setColorAC(id))
        themeMode.toggleColorMode(color || 'default')
    }, [dispatch, themes, themeMode])

    return <ThemePicker
        addTheme={addTheme}
        setColor={setColor}
        themes={themes}
    />
}