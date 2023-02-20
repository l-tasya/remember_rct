import React from 'react';
import {FormikErrors, useFormik} from 'formik';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import styled from 'styled-components';
import Button from '@mui/material/Button/Button';
import {useAppSelector} from '../../../common/hook/hooks';

export const Wrapper = styled.form`

`

interface FormValues {
    email: string;
    password: string;
    rememberMe: boolean;
}

interface IProps {
    login: (email: string, login: string, rememberMe: boolean) => void
}


const LoginFormValidation = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    return errors;
}
export const LoginForm: React.FC<IProps> = ({login}) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: LoginFormValidation,
        onSubmit: (values) => {
            setTimeout(() => {
                login(values.email, values.password, values.rememberMe)
            }, 400);


        }
    });
    const entity = useAppSelector(t => t.auth.entity)
    return (
        <Wrapper onSubmit={formik.handleSubmit}>
            <TextField
                fullWidth
                name="email"
                label="Email"
                size="small"
                variant="standard"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
                fullWidth
                name="password"
                label="Password"
                size="small"
                variant="standard"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <div>Remember<Checkbox
                name="rememberMe"
                size="small"
                value={formik.values.email}
                checked={formik.values.rememberMe}
                onChange={formik.handleChange}
            /></div>
            <Button color="primary" variant="contained" fullWidth type="submit" disabled={entity === 'loading'}>
                Submit
            </Button>
        </Wrapper>
    );
};