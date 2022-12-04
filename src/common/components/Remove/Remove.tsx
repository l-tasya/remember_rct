import React, {useState} from 'react';
import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import {RemoveButton} from '../../styles/mui-styles';
import {StyledBlock} from '../../styles/styles';
import Button from '@mui/material/Button/Button';


type RemovePropsType = {
    removeCallback: () => void
}
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  button{
  margin: 0 10px 10px 10px;
  }
`
const Content = styled(StyledBlock)`
padding: 3px;

`
const Container = styled.div`
        justify-self: flex-end;
        align-self: flex-end;
        grid-column-start: 4;
`
const Title = styled.div`
        grid-column-end: 3;
        grid-column-start: 1;
        font-size: 23px;
        margin: 5px 10px;
`
export const Remove: React.FC<RemovePropsType> = React.memo(({removeCallback}) => {
        let [open, setOpen] = useState(false)

        const handleClick = () => setOpen(!open)

        return <Container onClick={handleClick}><RemoveButton/>
            <Dialog onClose={handleClick} open={open}>
                <Content padding={'none'}>
                    <Title>Do you really want to delete this item?</Title>
                    <ButtonContainer>
                        <Button variant={'contained'} size={'small'} onClick={() => removeCallback()}>Confirm</Button>
                        <Button variant={'contained'} size={'small'} onClick={handleClick}>Cancel</Button>
                    </ButtonContainer>
                </Content>
            </Dialog>
        </Container>
    }
)