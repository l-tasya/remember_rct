import axios from "axios";
import React, {useEffect} from "react";
import styled from "styled-components";
import {StyledBlock} from "../../../common/styles/styles";
import {useDispatch, useSelector} from "react-redux";
import {setUsersAC, UserType} from "../../../redux/reducers/usersReducer";
import {AppStateType} from "../../../redux/store/store";
import {User} from "./User/User";


export const Friends = React.memo(() => {
    const Container = styled(StyledBlock)`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 200px);
`
    const dispatch = useDispatch()
    const users = useSelector<AppStateType, UserType[]>(t => t.users.users)
    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users?count=6').then(response => {
            dispatch(setUsersAC(response.data.items))
        })
    }, [])

    return (
        <Container>
            {
                users.map(t => <User
                    key={t.id}
                    id={t.id}
                    name={t.name}
                    status={t.status}
                    photo={t.photo}
                />)
            }
        </Container>
    )
}