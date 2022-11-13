import React, {useCallback} from "react";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import {UserType} from "../../redux/reducers/usersReducer";
import {User} from "./User/User";
import {PaddedContentContainer} from "../../common/styles/mui-styles";

type UsersPropsType = {
    users: UserType[]
    isFetching: boolean
    currentPage: number
    pagesCount: number
    changeCurrentPage: (page: number) => void
    page: {
        columns: number,
        rows: number
    }
    changeUserFollow: (id: number, newValue: boolean) => void
    changeIsFollowing: (id: number, newValue: boolean) => void
}
const Container = styled.div`
  grid-column-start: 2;
`
type UsersContainerProps = {
    columns: number
    rows: number
}
const UsersContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(${(props: UsersContainerProps) => props.columns}, 1fr);
        grid-template-rows: repeat(${(props: UsersContainerProps) => props.rows}, 200px);
`
export const Users: React.FC<UsersPropsType> = React.memo((
    {
        users,
        isFetching,
        currentPage,
        pagesCount,
        changeCurrentPage,
        page,
        changeUserFollow,
        changeIsFollowing
    }
    ) => {


        const handleChange = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
            changeCurrentPage(value);
        }, [changeCurrentPage]);


        return (
            <PaddedContentContainer>
                <Container>
                    {
                        <UsersContainer rows={page.rows} columns={page.columns}>{
                            users.map(t => <User
                                key={t.id}
                                id={t.id}
                                name={t.name}
                                status={t.status}
                                photo={t.photo}
                                followed={t.followed}
                                loading={isFetching}
                                changeFollow={changeUserFollow}
                                changeIsFollowing={changeIsFollowing}
                            />)
                        }
                        </UsersContainer>
                    }
                    <Pagination page={currentPage} count={pagesCount} onChange={handleChange}/>
                </Container>
            </PaddedContentContainer>
        )
    }
)