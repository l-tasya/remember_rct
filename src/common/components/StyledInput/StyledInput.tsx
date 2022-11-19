import React, {ChangeEvent, KeyboardEventHandler, useState} from "react";
import {TextField, TextFieldProps} from "@mui/material";

type StyledInputPropsType = TextFieldProps & {
    addItem: (value: string) => void
    pressHandler?: () => void
}
export const StyledInput: React.FC<StyledInputPropsType> = React.memo(({addItem, pressHandler, ...rests}) => {
    type ErrorType = string | '' | null
    let [value, setValue] = useState<string>('')
    let [error, setError] = useState<ErrorType>()
    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const enterKeyPressHandler: KeyboardEventHandler<HTMLDivElement> = (e) => {
        if (error !== null) {
            setError(null)
        }
        if (e.key === 'Enter') {
            if (value.trim() !== '') {
                addItem(value)
                setValue('')
                if (pressHandler) {
                    pressHandler()
                }
            } else {
                setError('Invalid value')
            }
        }

    }
    return <TextField
        {...rests}
        margin='normal'
        size={'small'}
        variant="outlined"
        label={'New item'}
        error={Boolean(error)}
        value={value}
        helperText={error}
        onChange={inputChangeHandler}
        onKeyPress={enterKeyPressHandler}

    />
})