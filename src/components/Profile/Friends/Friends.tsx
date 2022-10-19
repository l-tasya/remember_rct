import React from "react";
import styled from "styled-components";
import {StyledBlock} from "../../../common/styles/styles";

type FriendsPropsType = {}
const Container = styled(StyledBlock)`
        margin-top: 20px;

  
`
export const Friends: React.FC<FriendsPropsType> = React.memo(({}) => {

        return (
            <Container>
                {/*<UsersContainer columns={4} rows={3}/>*/}
            </Container>
        )
    }
)