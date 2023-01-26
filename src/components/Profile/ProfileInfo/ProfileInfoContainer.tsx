import React, {useCallback} from "react";
import {ProfileUserType, updateStatusThunkCreator} from "../../../redux/reducers/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/store";
import {ProfileInfo} from "./ProfileInfo";

export const ProfileInfoContainer: React.FC = () => {
    const user = useSelector<AppStateType, ProfileUserType>(t => t.profile.profile)
    let authID = useSelector<AppStateType, any>(t => t.auth.id)
    let statusText = useSelector<AppStateType, string>(s => s.profile.status)
    const dispatch = useDispatch();

    const setStatusText = useCallback((status: string) => {
        updateStatusThunkCreator(status)(dispatch)
    }, [])
    const isMyStatus = authID === user.userId
    return <ProfileInfo user={user} status={statusText} setStatus={setStatusText} isMyStatus={isMyStatus}/>
}