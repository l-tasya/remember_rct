import React, {ChangeEvent, KeyboardEventHandler, useState} from "react";
import {Button, TextField, TextFieldProps} from "@mui/material";
import styled from "styled-components";
import Paper from "@mui/material/Paper";

const Header = styled(Paper)`
   display: flex;
   align-items: baseline;
   justify-content: center;
   gap: 10px;
   padding: 16px;
`
type StyledInputPropsType = TextFieldProps & {
    addItem: (value: string) => void
    pressHandler?: () => void
    withButton?: string
}
export const StyledInput: React.FC<StyledInputPropsType> = React.memo(({addItem, pressHandler, withButton, ...rests}) => {
    type ErrorType = string | "" | null
    let [value, setValue] = useState<string>("")
    let [error, setError] = useState<ErrorType>()
    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const styles = {width: "30px", height: "30px", minWidth: 0}
    const send = () => {
        if (value.trim() !== "") {
            addItem(value)
            setValue("")
            if (pressHandler) {
                pressHandler()
            }
        } else {
            setError("Invalid value")
        }
    }
    const enterKeyPressHandler: KeyboardEventHandler<HTMLDivElement> = (e) => {
        if (error !== null) {
            setError(null)
        }
        if (e.key === "Enter") {
            send()
        }

    }
    return Boolean(!withButton) ? <TextField
        {...rests}
        margin='normal'
        size={"small"}
        variant="outlined"
        label={"New item"}
        error={Boolean(error)}
        value={value}
        helperText={error}
        onChange={inputChangeHandler}
        onKeyPress={enterKeyPressHandler}

    /> : <Header>
        <TextField
            {...rests}
            margin='none'
            size={"small"}
            variant="outlined"
            label={"New item"}
            error={Boolean(error)}
            value={value}
            helperText={error}
            onChange={inputChangeHandler}
            onKeyPress={enterKeyPressHandler}

        />
        <Button sx={styles} variant={"outlined"} onClick={send}>{withButton}</Button>
    </Header>

})