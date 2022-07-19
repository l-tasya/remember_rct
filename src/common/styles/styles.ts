import styled from "styled-components";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store/store";
import {ThemeColorType} from "../../redux/reducers/settingsReducer";
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
export const StyledBlock = styled.div`
    min-width: 40%;
    background: white;
    padding: 10px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
    overflow: hidden;
    border-radius: 12px;
`