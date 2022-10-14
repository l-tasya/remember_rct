import {createTheme, ThemeProvider} from '@mui/material/styles';
import React, {useCallback} from 'react';
import App from './App';


export const ColorModeContext = React.createContext({
    toggleColorMode: (value: string) => {
    }
})

export default function ToggleColorMode() {
    const [mode, setMode] = React.useState<string>('#f1f1f1');
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
            }
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