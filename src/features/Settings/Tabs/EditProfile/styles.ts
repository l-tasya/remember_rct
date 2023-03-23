import styled from "styled-components";
import {StyledIMGBadge, StyledTitle} from "../../../../common/styles/mui-styles";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

export const Header = styled.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
`
export const Footer = styled.div`
  grid-column: 1 / -1;
  margin: 8px 0;
`
export const Avatar = styled(StyledIMGBadge)`
  background: white;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

`
export const Item = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;

  label {
    align-self: flex-end;
    font-size: 12px;
  }

  input {
    font-size: 17px;
    height: 30px;
    padding: 0 5px;
    font-weight: 400;

    &:focus {
      outline: none;
      font-weight: 400;
    }
  }
`
export const ContainerForm = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  grid-column-gap: 16px

`
export const Info = styled(StyledTitle)`
  font-weight: 700;
  font-size: 20px;
`
export const Copy = ContentCopyIcon
export const Container = styled(StyledTitle)`
  font-weight: 700;
  font-size: 13px;

  svg {
    font-size: 12px;
  }

  display: flex;
  align-items: center;

  &:hover {
    color: darkgray;
  }

  &:active {
    color: black;
  }

  span {
    transition: 3s;
  }
`