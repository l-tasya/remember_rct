import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Users} from './Users';
import {AppStateType} from '../../redux/store/store';
import {
    changeCurrentPageAC,
    followThunkCreator,
    getUsersThunkCreator,
    unFollowThunkCreator,
    UsersStateType
} from '../../redux/reducers/usersReducer';

type UserContainerPropsType = {}
export const UsersContainer: React.FC<UserContainerPropsType> = React.memo(() => {
        const users = useSelector<AppStateType, UsersStateType>(t => t.users)
        const dispatch = useDispatch()
        //async
        const getUsers = useCallback((currentPage: number, pageSize: number) =>
                getUsersThunkCreator(currentPage, pageSize)(dispatch)
            , [dispatch])
        useEffect(() => {
            getUsers(users.currentPage, users.pageSize)
            return () => {
            }
        }, [users.currentPage, users.pageSize, getUsers])
        //callbacks
        const userFollow = useCallback((id: number) => followThunkCreator(id)(dispatch), [dispatch])

        const userUnFollow = useCallback((id: number) => unFollowThunkCreator(id)(dispatch), [dispatch])

        const changeCurrentPage = useCallback((page: number) => {
            dispatch(changeCurrentPageAC(page))
        }, [dispatch])

        let pagesCount = Math.ceil(users.totalUsers / users.pageSize)
        return <Users
            users={users.users}
            isFetching={users.isFetching}
            currentPage={users.currentPage}
            pagesCount={pagesCount}
            changeCurrentPage={changeCurrentPage}
            userFollow={userFollow}
            userUnFollow={userUnFollow}
        />
    }
)