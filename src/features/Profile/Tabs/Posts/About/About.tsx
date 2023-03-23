import React from "react";
import styled from "styled-components";
import {StyledTitle} from "../../../../../common/styles/mui-styles";
import {StyledBlock} from "../../../../../common/styles/styles";
import {NavLink} from "react-router-dom";
import {IProfile} from "../../../../../common/types/types";
import {useAppSelector} from "../../../../../common/hook/hooks";
import EditIcon from "@mui/icons-material/Edit";
import {Link} from "@mui/material";


interface IProps {
    profile: IProfile
}

const Wrapper = styled(StyledBlock)`
  display: block;
  min-width: 200px;
  height: min-content;
`
export const About: React.FC<IProps> = React.memo(({profile}) => {
    let authID = useAppSelector(t => t.auth.id)
    let isAuthProfile = authID === profile.userId
    return <Wrapper>

        <StyledTitle value={"main"} sx={{fontWeight: 700}}>About:</StyledTitle> {isAuthProfile &&
        <NavLink to={'/remember_rct/settings/personal-info'}><EditIcon sx={{fontSize: `14px`}}/></NavLink>}

        {
            Object.entries(profile.contacts).map(([key, val]) =>
                <div key={key}>{key}: {val ? <Link href={`https://${val}`}>link</Link> : 'null'}</div>
            )
        }
    </Wrapper>
})


