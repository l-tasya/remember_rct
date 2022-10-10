import React, {useState} from 'react';
import styled from "styled-components";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import Dialog from '@mui/material/Dialog';
import {StyledInput} from "../../../../common/components/StyledInput/StyledInput";


type AddDialogPropsType = {
    color: string
    addDialog: (value: string) => void
}
export const AddDialog: React.FC<AddDialogPropsType> = React.memo(({color, addDialog}) => {
    const Container = styled.div`
    
`
    const Icon = styled(LibraryAddIcon)`
    color: ${color}
`
    const DialogContainer = styled.div`
    height: 100px;
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`
    const Title = styled.div`
    text-align: center;
`
    const Input = styled(StyledInput)`
`
    const [open, setOpen] = useState(false)
    const handleClick = () => setOpen(!open)

    return <Container>
        <Icon onClick={handleClick}/>
        <Dialog open={open} onClose={handleClick}>
            <DialogContainer>
                <Title>Enter a name for new Dialog:</Title>
                <Input addItem={addDialog}/>
            </DialogContainer>
        </Dialog>
    </Container>
})