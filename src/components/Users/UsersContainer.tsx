import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {Users} from './Users';
import {AppStateType} from '../../redux/store/store';
import {
    changeCurrentPageAC,
    changeIsFetchingAC, changePageSizeAC,
    changeTotalUsersAC,
    setUsersAC,
    UsersStateType,
    UserType
} from '../../redux/reducers/usersReducer';

type UserContainerPropsType = {
    columns: number
    rows: number
}
export const UsersContainer: React.FC<UserContainerPropsType> = React.memo(({columns, rows}) => {
        const dispatch = useDispatch()
        const users = useSelector<AppStateType, UsersStateType>(t => t.users)
        const changeIsFetching = useCallback((value: boolean) => {
            dispatch(changeIsFetchingAC(value))
        }, [dispatch])
        const changePageSize = useCallback((value: number) => {
            dispatch(changePageSizeAC(value))
        }, [dispatch])
        const changeTotalUsers = useCallback((value: number) => {
            dispatch(changeTotalUsersAC(value))
        }, [dispatch])
        const setUsers = useCallback((users: UserType[]) => {
            dispatch(setUsersAC(users))
        }, [dispatch])
        const changeCurrentPage = useCallback((page: number) => {
            dispatch(changeCurrentPageAC(page))
        }, [dispatch])
        useEffect(() => {
            changeIsFetching(true)
            changePageSize(rows * columns)

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${users.currentPage}&count=${users.pageSize}`).then(response => {
                setUsers(response.data.items)
                setTimeout(() => {
                    changeIsFetching(false)
                }, 900)
                changeTotalUsers(response.data.totalCount)

            })
        }, [users.currentPage, changeIsFetching, changeCurrentPage, changePageSize,changeTotalUsers, columns, rows, setUsers, users.pageSize])

        let pagesCount = Math.ceil(users.totalUsers / users.pageSize)
        return <Users
            users={users.users}
            isFetching={users.isFetching}
            currentPage={users.currentPage}
            pagesCount={pagesCount}
            changeCurrentPage={changeCurrentPage}
            page={{columns, rows}}
        />
    }
)