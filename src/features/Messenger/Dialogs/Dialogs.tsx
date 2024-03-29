import React from "react";
import styled from "styled-components";
import {DialogType} from "./dialogsReducer";
import {AddDialog} from "./AddDialog/AddDialog";
import {Dialog} from "./Dialog/Dialog";
import {StyledBlock} from "../../../common/styles/styles";
import {Scroll} from "../../../common/styles/mui-styles";


const Container = styled.div`
width: 100%;
height: 100%;
position: relative;
border-right: 0.2px solid gray;

`
const Header = styled(StyledBlock)`
display: flex;
height: 10%;
padding: 0 16px;
justify-content: space-between;
align-items: center;
b{
font-weight: 600;
      color: #333;
      font-size: 1.5rem;
}
margin-bottom: 1px;
position: relative;
z-index: 3;
 border-bottom: 0.2px solid gray;
`
const List = styled(Scroll)`
height: 90%;
position: relative;
z-index: 2;
background: #f1f1f1;

`

interface IProps {
    dialogs: DialogType[]
    addDialog: (newValue: string) => void
    removeDialog: (dialogID: string) => void

}

export const Dialogs: React.FC<IProps> = React.memo(({dialogs, addDialog, removeDialog}) => {
    return (
        <Container>
            <Header radius={"none"} elevation={"none"} padding='none'>
                <b>Chats</b>
                <AddDialog addDialog={addDialog}/>
            </Header>
            <List id={"list"}>
                {
                    dialogs.map(t => <Dialog key={t.id} removeDialog={removeDialog} id={t.id}
                                             name={t.name}/>)
                }
            </List>
        </Container>
    )
})