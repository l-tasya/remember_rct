import React, {useCallback} from "react";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import {UserType} from "../../redux/reducers/usersReducer";
import {User} from "./User/User";
import {PaddedContentContainer} from "../../common/styles/mui-styles";
//styles
const UsersContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(${(props: {
    columns: number
    rows: number
}) => props.columns}, 1fr);
        grid-template-rows: repeat(${(props: {
    columns: number
    rows: number
}) => props.rows}, 200px);
`
const Container = styled.div`
  grid-column-start: 2;
`
type UsersPropsType = {
    users: UserType[]
    isFetching: boolean
    currentPage: number
    pagesCount: number
    changeCurrentPage: (page: number) => void
    userFollow: (id: number) => void
    userUnFollow: (id: number) => void
}


export const Users: React.FC<UsersPropsType> = React.memo((
    {
        users,
        isFetching,
        currentPage,
        pagesCount,
        changeCurrentPage,
        userFollow,
        userUnFollow
    }
    ) => {
        const handleChange = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
            changeCurrentPage(value);
        }, [changeCurrentPage]);

        const usersItems = users.map(t => <User
            key={t.id}
            id={t.id}
            name={t.name}
            status={t.status}
            photo={t.photo}
            followed={t.followed}
            loading={isFetching}
            follow={userFollow}
            unFollow={userUnFollow}
        />)
        return (
            <PaddedContentContainer>
                <Container>
                    <UsersContainer rows={3} columns={4}>
                        {usersItems}
                    </UsersContainer>
                    <Pagination page={currentPage} count={pagesCount} onChange={handleChange}/>
                </Container>
            </PaddedContentContainer>
        )
    }
)