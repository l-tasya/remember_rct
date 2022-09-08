import React from "react";
import styled from "styled-components";
import {StyledBlock} from "../../../common/styles/styles";
import {UserType} from "../../../redux/reducers/usersReducer";
import {User} from "./User/User";
import Pagination from "@mui/material/Pagination";

type FriendsPropsType = {
    users: UserType[]
    isFetching: boolean
    currentPage: number
    pagesCount: number
    changeCurrentPage: (page: number) =>void
}
export const Friends: React.FC<FriendsPropsType> = React.memo(({users, isFetching, currentPage, pagesCount, changeCurrentPage}) => {
        const Container = styled(StyledBlock)`
        margin-top: 20px;

  
`
        const Users = styled.div`
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 200px)
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