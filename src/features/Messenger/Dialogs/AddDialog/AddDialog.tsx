import React, {useState} from 'react';
import styled from "styled-components";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import Dialog from '@mui/material/Dialog';
import {StyledInput} from "../../../../components/StyledInput/StyledInput";


interface IProps {
    addDialog: (value: string) => void

}

const DialogContainer = styled.div`
    height: 100px;
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`

export const AddDialog: React.FC<IProps> = React.memo(({addDialog}) => {
    const [open, setOpen] = useState(false)
    const addDialogCallback = (value: string) => {
        addDialog(value)

    }
    const handleClick = () => {
        setOpen(!open)
    }
    return <div>
        <LibraryAddIcon sx={{color: (theme) => theme.palette.primary.main}} onClick={handleClick}/>
        <Dialog open={open} onClose={handleClick}>
            <DialogContainer>
                <div>Enter a name for new Dialog:</div>
                <StyledInput autoFocus pressHandler={handleClick} addItem={addDialogCallback}/>
            </DialogContainer>
        </Dialog>
    </div>
})