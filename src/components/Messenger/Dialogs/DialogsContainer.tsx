import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/store";
import {addDialogAC, DialogsType, removeDialogAC} from '../../../redux/reducers/dialogsReducer';
import {Dialogs} from "./Dialogs";

export const DialogsContainer: React.FC = React.memo(() => {
    let dialogs = useSelector<AppStateType, DialogsType>(t => t.dialogs)
    const dispatch = useDispatch()
    const addDialog = useCallback((newValue: string) => {
        dispatch(addDialogAC(newValue))
    }, [dispatch])
    const removeDialog = useCallback((dialogID: string) => {
        dispatch(removeDialogAC(dialogID))
    }, [dispatch])
    return <Dialogs
        dialogs={dialogs}
        addDialog={addDialog}
        removeDialog={removeDialog}
    />
})