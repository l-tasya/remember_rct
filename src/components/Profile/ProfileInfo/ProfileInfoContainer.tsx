import React, {useCallback, useEffect} from 'react';
import {
    getProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator
} from '../../../redux/reducers/profileReducer';
import {ProfileInfo} from './ProfileInfo';
import {useAppDispatch, useAppSelector} from '../../../common/hook/hooks';
import {useParams} from "react-router-dom";
import Skeleton from "@mui/material/Skeleton/Skeleton";

export const ProfileInfoContainer: React.FC = () => {
    let auth = useAppSelector(t => t.auth)
    const authProfile = useAppSelector(t => t.auth.profile)
    const profile = useAppSelector(t => t.profile.profile)
    let statusText = useAppSelector(s => s.profile.status)
    let loading = useAppSelector(s => s.profile.profileLoading)
    const dispatch = useAppDispatch()
    let isProfile = false;
    let {userID} = useParams()

    if ((userID === 'profile') || (userID === '15744')) {
        if (auth.isAuth) {
            if (!isProfile) {
                isProfile = true
            }

        }
    } else {
        if (isProfile) {
            isProfile = false
        }

    }
    useEffect(() => {
        if (!isProfile) {
            dispatch(getProfileThunkCreator(Number(userID)))
        }
        if (isProfile) {
            dispatch(getStatusThunkCreator(auth.id!))
        }
    }, [userID, dispatch, auth.id, isProfile])
    const setStatusText = useCallback((status: string) => {
        dispatch(updateStatusThunkCreator(status))
    }, [dispatch])
    const resultProfile = isProfile ? authProfile : profile
    const isMyStatus = auth.id === resultProfile?.userId
    return (!resultProfile || statusText === undefined || loading === 'loading') ?
        <div style={{height: '400px'}}>
            <Skeleton variant="rounded" style={{height: '100%'}}/>
        </div>
        :
        <ProfileInfo user={resultProfile} status={statusText} setStatus={setStatusText} isMyStatus={isMyStatus}/>
}