import React from "react";
import styled from "styled-components";
import {StyledBlock} from "../../../common/styles/styles";

type FriendsPropsType = {}
export const Friends: React.FC<FriendsPropsType> = React.memo(({}) => {
        const Container = styled(StyledBlock)`
        margin-top: 20px;

  
`
        return (
            <Container>
                {/*<UsersContainer columns={4} rows={3}/>*/}
            </Container>
        )
    }
)