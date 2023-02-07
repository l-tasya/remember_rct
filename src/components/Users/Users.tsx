import React, {useCallback} from "react";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import {User} from "./User/User";
import {IUser} from "../../common/types/types";
//styles
const UsersContainer = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
        gap: 16px;
        grid-auto-rows: minmax(150px, 200px);
`

const Footer = styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
display: grid;
grid-template-rows: 1fr 50px;
`

interface IProps {
    users: IUser[]
    isFetching: boolean
    currentPage: number
    pagesCount: number
    changeCurrentPage: (page: number) => void
    userFollow: (id: number) => void
    userUnFollow: (id: number) => void
}

export const Users: React.FC<IProps> = React.memo(({users, isFetching, currentPage, pagesCount, changeCurrentPage, userFollow, userUnFollow}) => {

    const handleChange = useCallback((event: React.ChangeEvent<unknown>, value: number) => {
        changeCurrentPage(value);
    }, [changeCurrentPage]);

    const usersItems = users.map(t => {
        return <User
            key={t.id}
            id={t.id}
            name={t.name}
                status={t.status}
                photo={t.photo}
                followed={t.followed}
                loading={isFetching}
                follow={userFollow}
                unFollow={userUnFollow}
            />
        })

        return (
            <Wrapper id={"container"}>
                <UsersContainer>
                    {usersItems}
                </UsersContainer>
                <Footer>
                    <Pagination page={currentPage} count={pagesCount} onChange={handleChange}/>
                </Footer>
            </Wrapper>
        )
    }
)