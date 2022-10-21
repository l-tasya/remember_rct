import {createTheme, ThemeProvider} from '@mui/material/styles';
import React, {useCallback} from 'react';
import App from './App';
import {AppStateType} from "./redux/store/store";
import {useSelector} from "react-redux";
import {ThemesArrayType} from "./redux/reducers/settingsReducer";


export const ColorModeContext = React.createContext({
    toggleColorMode: (value: string) => {
    }
})

export default function ToggleColorMode() {
    const themes = useSelector<AppStateType, ThemesArrayType>(t => t.settings.themes)
    const current = themes.find(t => t.id === 'default')
    const [mode, setMode] = React.useState<string>(current ? current.first : '#f1f1f1');
    const colorMode = React.useMemo(() => ({
        toggleColorMode: (value: string) => {
            setMode(value);
        },
    }), [],);
    const getSecondValue = useCallback((): string => {
        function componentToHex(c: any) {
            let value = c > 200 ? c : c + 60
            var hex = value.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
        }

        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(mode)
        let rgb = null
        if (result) {
            rgb = {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            }
        }
        return rgb ? "#" + componentToHex(rgb.r) + componentToHex(rgb.g) + componentToHex(rgb.b) : ''
    }, [mode])
    const theme = React.useMemo(() => createTheme({
        palette: {
            primary: {
                main: mode,
                light: getSecondValue()
            },
        },
    }), [mode, getSecondValue]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}