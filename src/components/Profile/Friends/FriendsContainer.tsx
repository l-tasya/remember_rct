import React, {useEffect} from 'react';
import {Friends} from './Friends';
import {
    changeCurrentPageAC,
    changeIsFetchingAC,
    changeTotalUsersAC,
    setUsersAC,
    UsersStateType
} from "../../../redux/reducers/usersReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/store";
import axios from "axios";

export const FriendsContainer = React.memo(() => {
        const dispatch = useDispatch()
        const users = useSelector<AppStateType, UsersStateType>(t => t.users)
        useEffect(() => {
            dispatch(changeIsFetchingAC(true))
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${users.currentPage}&count=${users.pageSize}`).then(response => {
                dispatch(setUsersAC(response.data.items))
                setTimeout(()=>dispatch(changeIsFetchingAC(false)), 900)
                dispatch(changeTotalUsersAC(response.data.totalCount))

            })
        }, [users.currentPage,])
        const changeCurrentPage = (page: number) =>{
             dispatch(changeCurrentPageAC(page))
        }
        let pagesCount = Math.ceil(users.totalUsers / users.pageSize)
        return <Friends
            users={users.users}
            isFetching={users.isFetching}
            currentPage={users.currentPage}
            pagesCount={pagesCount}
            changeCurrentPage={changeCurrentPage}
        />
    }
)