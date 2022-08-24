import styled from "styled-components";

type WrapperPropsType = {
    background: string
}
//global
export const AppWrapper = styled.div`
 background: #${(props: WrapperPropsType) => props.background};
 min-height: 100vh;
 width: 100%;
 overflow-x: hidden;
`
export const StyledBlock = styled.div`
    background: white;
    padding: 16px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    overflow: hidden;
    border-radius: 8px;
`
export const StyledIMGBadge = styled.div`
    background: #d4ddea;
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
    height: 40px;
    width: 60%;
    font-weight: 700;
    color: #3f424b;
    
`
