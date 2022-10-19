import React, {useState} from 'react';
import styled from "styled-components";
import Dialog from '@mui/material/Dialog';
import {Button, RemoveButton} from '../../styles/mui-styles';
import {StyledBlock} from "../../styles/styles";


type RemovePropsType = {
    removeCallback: () => void
}
const ButtonContainer = styled.div`
`
const Container = styled.div`
        justify-self: flex-end;
        align-self: flex-end;
        grid-column-start: 4;
`
const Title = styled.div`
        grid-column-end: 3;
        grid-column-start: 1;
        font-size: 20px;
        margin: 5px 10px;
`
export const Remove: React.FC<RemovePropsType> = React.memo(({removeCallback}) => {
        let [open, setOpen] = useState(false)

        const handleClick = () => setOpen(!open)

        return <Container onClick={handleClick}><RemoveButton/>
            <Dialog onClose={handleClick} open={open}>
                <StyledBlock padding={'none'}>
                    <Title>Do you really want to delete this item?</Title>
                    <ButtonContainer>
                        <Button variant={'filled'} onClick={() => removeCallback()}>Confirm</Button>
                        <Button variant={'filled'} onClick={handleClick}>Cancel</Button>
                    </ButtonContainer>
                </StyledBlock>
            </Dialog>
        </Container>
    }
)