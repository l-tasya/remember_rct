import React, {useCallback} from "react";
import {addDialogAC, removeDialogAC} from "../../../redux/reducers/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {useAppDispatch, useAppSelector} from "../../../common/hook/hooks";

export const DialogsContainer: React.FC = () => {
    let dialogs = useAppSelector(t => t.dialogs.dialogs)
    const dispatch = useAppDispatch()

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
}