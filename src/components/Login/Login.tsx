import React, {useCallback} from 'react';
import styled from 'styled-components';
import {StyledBlock} from '../../common/styles/styles';

import {useAppDispatch, useAppSelector} from '../../common/hook/hooks';
import {logIn} from '../../redux/reducers/authReducer';
import {LoginForm} from './LoginForm/LoginForm';
import {useNavigate} from 'react-router-dom';

const Container = styled(StyledBlock)`
  margin: 16px;
  min-width: 200px;
  width: 20%;
  text-align: center;
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
    const dispatch = useAppDispatch();
    const loginCallback = useCallback((email: string, password: string, rememberMe: boolean) => {
        dispatch(logIn(email, password, rememberMe))
    }, [dispatch])
    const navigate = useNavigate()
    const auth = useAppSelector(t => t.auth)
    if (auth.isAuth) {
        navigate(`/remember_rct/${auth.id}/posts`)
    }
    return <Container elevation={3} radius={13}>
        <Title>Login</Title>
        <LoginForm login={loginCallback}/>
    </Container>

})
















