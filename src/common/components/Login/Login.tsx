import React from 'react';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useFormik} from 'formik';
import {Navigate} from 'react-router-dom';
import Paper from '@mui/material/Paper/Paper';
import styled from 'styled-components';
import {useAppDispatch, useAppSelector} from '../../hook/hooks';
import {logIn} from "../../../redux/reducers/authReducer";


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

const validate = (values: Initial) => {
    const errors: FormikErrorType = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 3) {
        errors.password = 'Must be more than 6 character';
    }
    return errors;
}
type Initial = {
    email: string,
    password: string,
    rememberMe: boolean
}
const Container = styled(Paper)`
  width: 300px;
  padding: 8px;
  margin: 8px;
`
const Title = styled.div`
  font-weight: 700;
  text-align: center;
`
const SubTitle = styled(Title)`
  font-size: 10px;
  text-align: left;
  color: gray;

  span {
    font-size: 8px;
    font-family: MyFont, serif;
    color: white;
    background: #0000cd;
    padding: 2px;
  }

  div {
    font-size: 12px;
  }

`
export const Login: React.FC = () => {
    const dispatch = useAppDispatch()
    const auth = useAppSelector(t => t.auth)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        } as Initial,
        validate,
        onSubmit: async (values) => {
            await dispatch(logIn(values.email, values.password, values.rememberMe))
            await formik.resetForm({
                values: {password: '', rememberMe: values.rememberMe, email: values.email},
            })
        },
    })
    if (auth.isAuth) {
        return <Navigate to={`/remember_rct/${auth.id}/`}/>
    }
    return <Container>
        <Title style={{fontSize: '20px'}}>Login</Title>
        <Grid container justifyContent={'center'}>
            <Grid item justifyContent={'center'}>
                <FormControl>
                    <SubTitle>
                        <div>To log in get registered
                            <a href="src/common/components/Login/Login"
                               target="_blank"
                               rel="noreferrer"> here
                            </a> or use common test account credentials:
                        </div>
                        <p><span>Email</span>: free@samuraijs.com</p>
                        <p><span>Password</span>: free</p>
                    </SubTitle>
                    <form onSubmit={formik.handleSubmit}>
                        <FormGroup>

                            <TextField
                                label="Email"
                                margin="normal"
                                size="small"
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                                {...formik.getFieldProps('email')}
                            />

                            <TextField
                                type="password"
                                label="Password"
                                size="small"
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                                {...formik.getFieldProps('password')}
                            />

                            <FormControlLabel label={'Remember me'}
                                              control={<Checkbox
                                                  checked={formik.values.rememberMe}
                                                  {...formik.getFieldProps('rememberMe')}/>}/>
                            <Button type={'submit'} variant={'contained'} color={'primary'}>
                                Login
                            </Button>
                        </FormGroup>
                    </form>
                </FormControl>
            </Grid>
        </Grid>
    </Container>
}
