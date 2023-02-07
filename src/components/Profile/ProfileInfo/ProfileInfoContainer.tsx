import React, {useCallback} from "react";
import {updateStatusThunkCreator} from "../../../redux/reducers/profileReducer";
import {ProfileInfo} from "./ProfileInfo";
import {useAppDispatch, useAppSelector} from "../../../common/hook/hooks";

export const ProfileInfoContainer: React.FC = () => {
    const user = useAppSelector(t => t.profile.profile)
    let authID = useAppSelector(t => t.auth.id)
    let statusText = useAppSelector(s => s.profile.status)
    const dispatch = useAppDispatch();

    const setStatusText = useCallback((status: string) => {
        dispatch(updateStatusThunkCreator(status))
    }, [dispatch])
    const isMyStatus = authID === user.userId
    return <ProfileInfo user={user} status={statusText} setStatus={setStatusText} isMyStatus={isMyStatus}/>
}