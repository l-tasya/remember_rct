import React from "react";
import styled from "styled-components";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type RadioButtonPropsType = {
    checked: boolean
    c1: () => void
    title: string
}

export const RadioButton: React.FC<RadioButtonPropsType> = ({checked, title, c1}) => {
    const RadioButtonContainer = styled.div`
    display: flex;
`
    const StyledRadio = styled.div`
     border: ${checked ? '1px solid white' : ''};
     outline: ${checked ? '2px solid #007FFF' : ''};
     background: ${title};
     width: 35px;
     height: 35px;
     border-radius:50%;
     display: flex;
     justify-content: flex-end;
     align-items: end;
     svg{
     color: #007FFF;
     font-size: 15px;
     }
  
`
    return <RadioButtonContainer>
        <StyledRadio onClick={() => c1()}>{checked && <CheckCircleIcon/>}</StyledRadio>

    </RadioButtonContainer>
}