import React, {useCallback, useEffect} from "react";
import {Users} from "./Users";
import {changeCurrentPageAC, followTC, getUsersTC, unFollowTC} from "../../redux/reducers/usersReducer";
import {PaddedContentContainer} from "../../common/styles/mui-styles";
import {useAppDispatch, useAppSelector} from "../../common/hook/hooks";

export const UsersContainer: React.FC = () => {
    const users = useAppSelector(t => t.users)
    const dispatch = useAppDispatch()
    //async
    useEffect(() => {
        dispatch(getUsersTC(users.currentPage, users.pageSize))
        return () => {
        }
    }, [users.currentPage, users.pageSize, dispatch])
    //callbacks
    const userFollow = useCallback((id: number) => dispatch(followTC(id)), [dispatch])

    const userUnFollow = useCallback((id: number) => dispatch(unFollowTC(id)), [dispatch])

    const changeCurrentPage = useCallback((page: number) => {
        dispatch(changeCurrentPageAC(page))
    }, [dispatch])

    let pagesCount = Math.ceil(users.totalUsers / users.pageSize)
    return <PaddedContentContainer><Users
        users={users.users}
        isFetching={users.isFetching}
        currentPage={users.currentPage}
        pagesCount={pagesCount}
        changeCurrentPage={changeCurrentPage}
        userFollow={userFollow}
        userUnFollow={userUnFollow}
    />
    </PaddedContentContainer>
}