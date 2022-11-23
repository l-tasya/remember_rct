import React from 'react';
import styled from 'styled-components';
import {ContentContainerWithoutPadding} from "../../common/styles/mui-styles";
import {StyledBlock} from '../../common/styles/styles';

const Container = styled(ContentContainerWithoutPadding)`

`
const Block = styled(StyledBlock)`
  margin: 16px;
  min-width: 200px;
  width: 20%;
  height: 50%;
  text-align: center;
  //_____
  display: flex;
  flex-direction: column;
  align-items: center;
  input{
  width: 80%;
  margin-top: 10px;
  }
`
const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`
export const Login: React.FC = React.memo(() => {
    return <Container>
        <Block elevation={3} radius={13}>
            <Title>Login</Title>
            <input type="text" placeholder={'Login'}/>
            <input type="password" placeholder={'Password'}/>
            don't work
        </Block>
    </Container>;

})