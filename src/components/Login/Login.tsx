import React from "react";
import styled from "styled-components";
import {ContentContainerWithoutPadding} from "../../common/styles/mui-styles";
import {StyledBlock} from "../../common/styles/styles";
import {FormikErrors, useFormik} from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
            <LoginForm/>
        </Block>
    </Container>

})


interface FormValues {
    email: string;
    password: string;
}

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validate: (values) => {
            const errors: FormikErrors<FormValues> = {};
            if (!values.email) {
                errors.email = "Required";
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = "Invalid email address";
            }
            return errors;
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="email"
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
                    id="password"
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
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};