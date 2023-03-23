import TextField from "@mui/material/TextField/TextField";
import React, {ChangeEvent, KeyboardEventHandler, useState} from "react";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";

type EditableTitlePropsType = {
    title: string
    c1: (value: string) => void
}
type EditMode = "edit" | "default";
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  svg{
    font-size: 14px;
  }
  
`
export const EditableTitle: React.FC<EditableTitlePropsType> = React.memo(({title, c1}) => {
    let [mode, setMode] = useState<EditMode>("default")
    let [value, setValue] = useState<string>(title)
    let [error, setError] = useState<string>("")

    const sentResult = () => {
        if (value.trim() === "") {
            setError("Invalid Value")
        } else {
            c1(value)
            setMode("default")
        }

    }
    const onEnterKeyPress: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === "Enter") {
            sentResult()
        }
    }
    const onBlurHandler = () => {
        setMode("default")
        if (error) {
            setValue(title)
            setError("")
        }
    }
    const doubleClick = () => {
        setMode("edit")
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (error) {
            setError("")
        }
        setValue(e.currentTarget.value)
    }
    return <Container>{
        mode === "edit" ?
            <TextField type="text"
                       value={value}
                       variant={"standard"}
                       error={Boolean(error)}
                       helperText={error}
                       onChange={onChangeHandler}
                       onBlur={onBlurHandler}
                       onKeyDown={onEnterKeyPress}
                       size={"small"}
                       margin={"none"}
                       autoFocus
                       style={{textAlign: "center"}}

            />
            :
            <Container onDoubleClick={doubleClick}>{title}<EditIcon onClick={() => setMode("edit")}/></Container>
    }
    </Container>
})
