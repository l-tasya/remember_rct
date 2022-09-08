import React from "react";
import styled from "styled-components";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type RadioButtonPropsType = {
    checked: boolean
    c1: () => void
    title: string
    content?: string
}

export const RadioButton: React.FC<RadioButtonPropsType> = ({checked, title, c1, content}) => {
    const RadioButtonContainer = styled.div`
    display: flex;
    position: relative;
`
    const StyledRadio = styled.div`
     border: ${checked ? '2px solid white' : ''};
     outline: ${checked ? '2px solid black' : ''};
     background: ${title};
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
    return <RadioButtonContainer>
        <StyledRadio onClick={() => c1()}>{checked && <CheckCircleIcon />}{content?content:''}</StyledRadio>

    </RadioButtonContainer>
}