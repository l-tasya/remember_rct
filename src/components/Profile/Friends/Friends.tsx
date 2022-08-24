import axios from "axios";
import React, {useEffect} from "react";
import styled from "styled-components";
import {StyledBlock} from "../../../common/styles/styles";
import {useDispatch, useSelector} from "react-redux";
import {changeTotalUsersAC, setUsersAC, UsersStateType} from "../../../redux/reducers/usersReducer";
import {AppStateType} from "../../../redux/store/store";
import {User} from "./User/User";


export const Friends = React.memo(() => {
    const Container = styled(StyledBlock)`
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 200px)
`
    const dispatch = useDispatch()
    const users = useSelector<AppStateType, UsersStateType>(t => t.users)
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${users.currentPage}&count=${users.pageSize}`).then(response => {
            dispatch(setUsersAC(response.data.items))
            dispatch(changeTotalUsersAC(50))
        })
    }, [])

    return (
        <Container>
            {
                users.users.map(t => <User
                    key={t.id}
                    id={t.id}
                    name={t.name}
                    status={t.status}
                    photo={t.photo}
                    followed={t.followed}
                />)
            }
        </Container>
    )
})