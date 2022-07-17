import styled from "styled-components";
// @ts-ignore

type WrapperPropsType = {
    background: string
}
//global
export const AppWrapper = styled.div`
 background: #${(props: WrapperPropsType) => props.background};
 min-height: 100vh;
 width: 100%;
 
`