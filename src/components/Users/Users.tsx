import React from "react";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import {UserType} from "../../redux/reducers/usersReducer";
import {User} from "./User/User";

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
}
export const Users: React.FC<UsersPropsType> = React.memo((
    {
        users,
        isFetching,
        currentPage,
        pagesCount,
        changeCurrentPage,
        page
    }
    ) => {
        const Container = styled.div`

  
`
        const Users = styled.div`
        display: grid;
        grid-template-columns: repeat(${page.columns}, 1fr);
        grid-template-rows: repeat(${page.rows}, 200px)
`
        const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
            changeCurrentPage(value);
        };
        return (
            <Container>
                {
                    <Users>{
                        users.map(t => <User
                            key={t.id}
                            id={t.id}
                            name={t.name}
                            status={t.status}
                            photo={t.photo}
                            followed={t.followed}
                            loading={isFetching}
                        />)
                    }
                    </Users>
                }
                <Pagination page={currentPage} count={pagesCount} onChange={handleChange}/>
            </Container>
        )
    }
)