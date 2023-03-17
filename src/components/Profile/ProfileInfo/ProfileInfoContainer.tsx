import React, {useEffect, useMemo} from 'react';
import {getProfileThunkCreator, getStatusThunkCreator} from '../../../redux/reducers/profileReducer';
import {ProfileInfo} from './ProfileInfo';
import {useAppDispatch, useAppSelector} from '../../../common/hook/hooks';
import {useParams} from "react-router-dom";

export const ProfileInfoContainer: React.FC = () => {
    let auth = useAppSelector(t => t.auth)
    const authProfile = useAppSelector(t => t.auth.profile)
    const profile = useAppSelector(t => t.profile.profile)
    let statusText = useAppSelector(s => s.profile.status)
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
            dispatch(getStatusThunkCreator(Number(userID)))
        }
    }, [isProfile, userID, dispatch])
    // useEffect(() => {
    //         setIsProfile(false)
    //         let id = Number(param.userID)
    //         dispatch(getProfileThunkCreator(id))
    //         // dispatch(getStatusThunkCreator(Number(param.userID)))
    //     }
    //
    //     return () => {
    //     }
    //
    // }, [dispatch, auth.isAuth, auth.id, param.userID])
    // const setStatusText = useCallback((status: string) => {
    //     dispatch(updateStatusThunkCreator(status))
    // }, [dispatch])
    const resultProfile = useMemo(() => isProfile ? authProfile ? authProfile : profile : profile, [isProfile, authProfile, profile])
    // const isMyStatus = auth.id === resultProfile.userId
    return <ProfileInfo user={resultProfile} status={statusText}/>
}