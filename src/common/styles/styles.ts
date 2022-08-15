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
    min-width: 40%;
    background: white;
    padding: 10px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    overflow: hidden;
    border-radius: 12px;
`