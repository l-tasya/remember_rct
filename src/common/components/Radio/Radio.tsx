import React from "react";
import styled from "styled-components";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type RadioButtonPropsType = {
    checked: boolean
    c1: () => void
    title: string
    content?: string
}
const RadioButtonContainer = styled.div`
    display: flex;
    position: relative;
`
type StyledRadioPropsType = {
    checked: boolean
    title: string
}
const StyledRadio = styled.div`
     border: ${(props: StyledRadioPropsType) => props.checked ? '2px solid white' : ''};
     outline: ${(props: StyledRadioPropsType) => props.checked ? '2px solid black' : ''};
     background: ${(props: StyledRadioPropsType) => props.title};
     width: 35px;
     height: 35px;
     border-radius:50%;
     display: flex;
     justify-content: flex-end;
     align-items: end;
     margin: 0 5px 0 0;
     svg{
     color: black;
     font-size: 20px;
`

export const RadioButton: React.FC<RadioButtonPropsType> = ({checked, title, c1, content}) => {

    return <RadioButtonContainer>
        <StyledRadio checked={checked} title={title} onClick={() => c1()}>{checked &&
        <CheckCircleIcon/>}{content ? content : ''}</StyledRadio>

    </RadioButtonContainer>
}