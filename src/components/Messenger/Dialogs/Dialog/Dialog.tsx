import React from 'react';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import styled from 'styled-components';
import {Remove} from '../../../../common/components/Remove/Remove';


type DialogPropsType = {
    id: string
    name: string
    removeDialog: (dialogID: string)=>void
}
export const Dialog: React.FC<DialogPropsType> = React.memo(({id, name, removeDialog}) => {

    const Container = styled.div`
     display: grid;
     grid-template-columns: 1fr 1fr;
`
    const RemoveEl = styled(Remove)`
`
    let navigate = useNavigate()
    let {pathname} = useLocation()
    const removeCallback = ()=>{
        if(pathname.split('/')[3] === id){
            navigate('/remember_rct/messenger')
        }
        removeDialog(id)
    }

    return <Container>
        <NavLink key={id} to={`${id}`}>{name}</NavLink><RemoveEl fontSize={15} removeCallback={()=>removeCallback()}/>
    </Container>
})