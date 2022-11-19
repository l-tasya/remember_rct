import React, {useCallback} from 'react';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import styled from 'styled-components';
import {Remove} from '../../../../common/components/Remove/Remove';


type DialogPropsType = {
    id: string
    name: string
    removeDialog: (dialogID: string)=>void
}
const Container = styled.div`
     display: grid;
     grid-template-columns: 1fr 1fr;
     padding: 16px;
     margin-bottom: 1px;
     background: white;
     
`
const RemoveEl = styled(Remove)`
`
export const Dialog: React.FC<DialogPropsType> = React.memo(({id, name, removeDialog}) => {


    let navigate = useNavigate()
    let {pathname} = useLocation()
    const removeCallback = useCallback(() => {
        if (pathname.split('/')[3] === id) {
            navigate('/remember_rct/messenger')
        }
        removeDialog(id)
    }, [id, navigate, pathname, removeDialog])

    return <Container>
        <NavLink key={id} to={`/remember_rct/messenger/${id}`}>{name}</NavLink><RemoveEl
        removeCallback={() => removeCallback()}/>
    </Container>
})