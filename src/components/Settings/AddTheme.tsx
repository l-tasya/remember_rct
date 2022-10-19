import React, {useState} from 'react';
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";
import {Dialog} from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";


type AddThemePropsType = {
    addTheme: (value: string) => void
}
const Container = styled.div`
          border: 1px solid white;
          outline: 2px solid black;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
`
const DialogContainer = styled.div`
    padding: 10px;
   width: 300px;
   height: 500px;
   button{
   width: 100px
   }
   display: flex;
   justify-content: flex-start;
   align-items: center;
   flex-direction: column;
`
export const AddTheme: React.FC<AddThemePropsType> = React.memo(({addTheme}) => {


    const [open, setOpen] = useState(false)
    const handleClick = () => setOpen(!open)
    const [color, setColor] = useState('#FFFFFF')
    const callback1 = () => {
        addTheme(color)
        handleClick()
    }

    return <Container>
        <AddIcon onClick={handleClick}/>
        <Dialog open={open} onClose={handleClick}>
            <DialogContainer>
                <DialogTitle>Choose The Color</DialogTitle>
                <input type="color" value={color} onInput={(e)=> setColor(e.currentTarget.value)}/>
                <Button variant={'contained'}
                        size={'small'} onClick={callback1}>submit</Button>
            </DialogContainer>
        </Dialog>
    </Container>
})