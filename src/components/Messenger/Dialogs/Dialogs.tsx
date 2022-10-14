import React, {useCallback} from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/store";
import {ThemeColorType} from "../../../redux/reducers/settingsReducer";
import {DialogsType} from '../../../redux/reducers/dialogsReducer';
import {AddDialog} from "./AddDialog/AddDialog";
import {Dialog} from "./Dialog/Dialog";
import {StyledBlock} from '../../../common/styles/styles';


type DialogPropsType = {
    dialogs: DialogsType
    addDialog: (newValue: string) => void
    removeDialog: (dialogID: string) => void

}

const Container = styled.div`
width: 100%;
height: 100%;
position: relative;

`
const Wrapper = styled.div`
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
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
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
`
const List = styled.div`
height: 90%;
position: absolute;
overflow: scroll;
width: 100%;

`
export const Dialogs: React.FC<DialogPropsType> = React.memo(({dialogs, addDialog, removeDialog}) => {
    let color = useSelector<AppStateType, ThemeColorType>(t => t.settings.themeColor)
//     const Container = styled.div`\n    display: grid;\n    border-right: 0.3px solid rgb(211,211,211, 0.3);\n    align-items: center;\n    justify-items: center;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(20, 50px);\n    overflow-y: scroll;\n    //firefox\n    scrollbar-color: ${color.first} white;\n    scrollbar-width: thin;\n    //google chrome\n    ::-webkit-scrollbar {\n    height: 10px;\n    width: 5px;\n    background: white;\n    }\n    ::-webkit-scrollbar-thumb {\n    background: ${color.first};\n}\n\n::-webkit-scrollbar-corner {\n    background: #000;\n}\n`
//     const Title = styled.div`
//       font-weight: 600;
//       font-size: 1.5rem;
//       color: #333;
// `
//     const Header = styled.div`
//     border: 0.3px solid rgb(211,211,211, 0.3);
//     width: 100%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: space-around;
//
// `
    const addDialogCallback = useCallback((newValue: string) => {
        addDialog(newValue)
    }, [addDialog])
    const removeDialogCallback = useCallback((dialogID: string) => {
        removeDialog(dialogID)
    }, [removeDialog])
    return (
        <Wrapper>
            <Container>
                <Header radius={0} elevation={0} padding='none'><b>Chats</b><AddDialog addDialog={addDialogCallback}
                                                                                       color={color.first}/></Header>
                <List id={'list'}>
                    {
                        dialogs.map(t => <Dialog key={t.id} removeDialog={removeDialogCallback} id={t.id}
                                                 name={t.name}/>)
                    }
                </List>
            </Container>
        </Wrapper>
    )
})