import React, {useState} from 'react';
import styled from "styled-components";
import CancelIcon from "@mui/icons-material/Cancel";
import Dialog from '@mui/material/Dialog';
import {StyledButton} from '../../styles/styles';
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/store";
import {ThemeColorType} from "../../../redux/reducers/settingsReducer";


type RemovePropsType = {
    fontSize: number
    removeCallback: () => void
}
export const Remove: React.FC<RemovePropsType> = React.memo(({removeCallback, fontSize}) => {
        const color = useSelector<AppStateType, ThemeColorType>(t => t.settings.themeColor)
        const Element = styled(CancelIcon)`
        &:hover{
        color: red;
        transition: 0.3s;
        }

`
        const Container = styled.div`
        justify-self: flex-end;
        align-self: center;
`
        let [open, setOpen] = useState(false)
        const Prompt = styled.div`
        padding: 15px;
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
`
        const Title = styled.div`
        grid-column-end: 3;
        grid-column-start: 1;
        font-size: 20px;
`
        const Button = styled(StyledButton)`
        font-weight: 600;
        :hover{
        background: ${color.second};
        color: white;
        transition: 0.3s;
        }
`
        const handleClick = () => setOpen(!open)

        return <Container onClick={handleClick}><Element sx={{color: color.first, fontSize: fontSize}}/>
            <Dialog onClose={handleClick} open={open}>
                <Prompt>
                    <Title>Do you really want to delete this item?</Title>
                    <Button onClick={() => removeCallback()}>Yes</Button>
                    <Button onClick={handleClick}>No</Button>
                </Prompt>
            </Dialog>
        </Container>
    }
)