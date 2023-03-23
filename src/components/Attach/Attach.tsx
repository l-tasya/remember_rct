import React, {useState} from "react";

import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import {AddLink, RemoveCircle} from "@mui/icons-material";
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import Dialog from "@mui/material/Dialog/Dialog";
import Button from "@mui/material/Button/Button";
import {StyledBlock} from "../../common/styles/styles";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid/Grid";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 10px;
  gap: 10px;

  button {
    margin: 0;
  }
`
const Content = styled(StyledBlock)`
  padding: 3px;

`
const Title = styled.div`
  grid-column-end: 3;
  grid-column-start: 1;
  margin: 5px 10px 0 10px;
  text-align: center;
  font-family: MyFont;
  font-size: 13px;
  color: #0000cd;
`

interface IProps {
    c1: (text: string | null) => void
    value: string | null
}

export const Attach: React.FC<IProps> = ({c1, value}) => {
    let [open, setOpen] = useState<boolean>(false)
    let [text, setText] = useState<string | null>(value)
    const handleClick = () => {
        setOpen(!open)
    }
    const styles = {
        textAlign: 'center',
        margin: '10px',
    }
    const submit = () => {
        c1(text)
        handleClick()
    }
    return <div>
        <IconButton onClick={handleClick} size={'small'}>
            <InsertLinkIcon/>
        </IconButton>
        <Dialog onClose={handleClick} open={open}>
            <Content padding={"none"}>
                <Title>Attach Link</Title>
                <Grid container alignItems={'center'}><TextField label={'link'} sx={styles} size={'small'}
                                                                 variant={'outlined'} value={text}
                                                                 onChange={(e) => setText(e.currentTarget.value)}/><IconButton
                    size={'small'} onClick={() => {
                    setText('')

                }}><RemoveCircle fontSize={'small'}
                                 sx={{color: theme => theme.palette.primary.main}}/></IconButton></Grid>
                <ButtonContainer>
                    <Button startIcon={<AddLink/>} variant={"contained"} size={"small"} onClick={submit}>Attach</Button>
                    <Button variant={"contained"} size={"small"} onClick={handleClick}>Cancel</Button>
                </ButtonContainer>
            </Content>
        </Dialog>
    </div>
}
