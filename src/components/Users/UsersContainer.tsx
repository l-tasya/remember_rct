import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Users} from './Users';
import {AppStateType} from '../../redux/store/store';
import {
    changeCurrentPageAC,
    changeIsFetchingAC,
    changePageSizeAC,
    changeTotalUsersAC,
    changeUserFollowAC,
    setUsersAC,
    UsersStateType,
    UserType
} from '../../redux/reducers/usersReducer';
import {usersAPI} from '../../api/api';

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
    const changeUserFollow = useCallback((id: number, newValue: boolean) => {
        dispatch(changeUserFollowAC(id, newValue))
    }, [dispatch])
    useEffect(() => {
        changeIsFetching(true)
        changePageSize(rows * columns)

        usersAPI.getUsers(users.currentPage, users.pageSize).then(data => {
            setUsers(data.items)
            setTimeout(() => {
                changeIsFetching(false)
            }, 900)
            changeTotalUsers(data.totalCount)

        })
    }, [users.currentPage, changeIsFetching, changeCurrentPage, changePageSize, changeTotalUsers, columns, rows, setUsers, users.pageSize])

        let pagesCount = Math.ceil(users.totalUsers / users.pageSize)
        return <Users
            users={users.users}
            isFetching={users.isFetching}
            currentPage={users.currentPage}
            pagesCount={pagesCount}
            changeCurrentPage={changeCurrentPage}
            page={{columns, rows}}
            changeUserFollow={changeUserFollow}
        />
    }
)