import styled from "styled-components";
import {Paper} from "@mui/material";

type WrapperPropsType = {
    background: string
}
//global

//contentContainer wrap-------------------------
export const PaddedContentContainer = styled.div`
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 4;
    margin-top: 16px;
    height: 100%;
`
export const ContentContainerWithoutPadding = styled.div`
   grid-column-start: 1;
   grid-column-end: 4;
   grid-row-start: 1;
`
//--------------------------
//paper--------------------------
export const StyledBlock = styled(Paper)`
    background: white;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    ${(props: {padding?: string | 16}) =>(props.padding === 'none')?
        `padding: 0px'4`
    :
    `padding: 16px`
}
`






//-------------------------
export const AppWrapper = styled.div`
 background: #${(props: WrapperPropsType) => props.background};
 width: 100%;
 overflow-x: hidden;
`

export const StyledIMGBadge = styled.div`
    background: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
    color: #3f424b;
    font-size: 23px;
    }
`
export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    background: white;
    border: 0;
    outline: 0;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border-radius: 4px;
    height: 30px;
    width: 50%;
    font-weight: 700;
    color: #3f424b;
    margin: 3px;
    
`
export const ProfileBadge = styled.img`
    border-radius: 50%;
    width: 40px;
    background: gray;
`