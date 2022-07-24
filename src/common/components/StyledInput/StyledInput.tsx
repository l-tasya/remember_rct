import React, {ChangeEvent, useState} from "react";
import {TextField} from "@mui/material";


type StyledInputPropsType = {
    addItem: (value: string) => void
    label: string
}
export const StyledInput: React.FC<StyledInputPropsType> = ({addItem, label}) => {
    type ErrorType = string | '' | null
    let [value, setValue] = useState<string>('')
    let [error, setError] = useState<ErrorType>()
    const onChangeEvent = (e: ChangeEvent<HTMLInputElement>) => {
        setError('')
        setValue(e.currentTarget.value)
    }
    const addPostCallback = () => {
        if (value.trim() !== '') {
            addItem(value)
            setValue('')
        } else if (value.trim() === '') {
            setError('Invalid value')
        }
    }
    const EnterKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            addPostCallback()
        }
    }
    return <TextField size={'small'} variant="outlined" label={label} error={Boolean(error)} value={value} helperText={error}
                      onChange={onChangeEvent} onKeyPress={(e) => EnterKeyPress(e)}/>
}