import React from 'react';
import styled from "styled-components";
import CancelIcon from "@mui/icons-material/Cancel";


type RemovePropsType = {
    removeCallback: ()=>void
    color: string
    fontSize: number
}
export const Remove: React.FC<RemovePropsType> = React.memo(({removeCallback, color, fontSize}) => {
    const Element = styled(CancelIcon)`
    &:hover{
    color: red;
    transition: 0.3s;
    }
    grid-column-start: 4;
    grid-row-start: 1;
    justify-self: flex-end;
    align-self: center;
`
    return <Element sx={{color: color, fontSize: fontSize}} onClick={removeCallback}/>
}
)