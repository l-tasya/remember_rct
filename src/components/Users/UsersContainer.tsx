import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {Users} from './Users';
import {AppStateType} from '../../redux/store/store';
import {
    changeCurrentPageAC,
    changeIsFetchingAC, changePageSizeAC,
    changeTotalUsersAC,
    setUsersAC,
    UsersStateType
} from '../../redux/reducers/usersReducer';
type UserContainerPropsType = {
    columns: number
    rows: number
}
export const UsersContainer: React.FC<UserContainerPropsType> = React.memo(({columns, rows}) => {
        const dispatch = useDispatch()
        const users = useSelector<AppStateType, UsersStateType>(t => t.users)
        useEffect(() => {
            dispatch(changeIsFetchingAC(true))
            dispatch(changePageSizeAC(rows*columns))

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${users.currentPage}&count=${users.pageSize}`).then(response => {
                dispatch(setUsersAC(response.data.items))
                setTimeout(() => dispatch(changeIsFetchingAC(false)), 900)
                dispatch(changeTotalUsersAC(response.data.totalCount))

            })
        }, [users.currentPage,])
        const changeCurrentPage = (page: number) => {
            dispatch(changeCurrentPageAC(page))
        }
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