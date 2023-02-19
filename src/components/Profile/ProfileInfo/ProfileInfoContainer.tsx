import React, {useCallback, useEffect, useState} from 'react';
import {
    getProfileThunkCreator,
    getStatusThunkCreator,
    updateStatusThunkCreator
} from '../../../redux/reducers/profileReducer';
import {ProfileInfo} from './ProfileInfo';
import {useAppDispatch, useAppSelector} from '../../../common/hook/hooks';
import {useParams} from 'react-router-dom';

export const ProfileInfoContainer: React.FC = () => {
    let auth = useAppSelector(t => t.auth)
    const authProfile = useAppSelector(t => t.auth.profile)
    const profile = useAppSelector(t => t.profile.profile)
    let statusText = useAppSelector(s => s.profile.status)


    const dispatch = useAppDispatch();
    let [isProfile, setIsProfile] = useState<boolean>(false)

    let param = useParams()

    useEffect(() => {
        if (param.userID === 'profile') {
            if (auth.isAuth) {
                setIsProfile(true)
                dispatch(getStatusThunkCreator(Number(auth.id)))
            }
        } else if (Number(param.userID) === auth.id) {
            if (auth.isAuth) {
                setIsProfile(true)
                dispatch(getStatusThunkCreator(Number(param.userID)))
            }
        } else {

            setIsProfile(false)
            let id = Number(param.userID)
            dispatch(getProfileThunkCreator(id))
            dispatch(getStatusThunkCreator(Number(param.userID)))
        }

        return () => {
        }

    }, [param, dispatch, auth.isAuth, auth.id])
    const setStatusText = useCallback((status: string) => {
        dispatch(updateStatusThunkCreator(status))
    }, [dispatch])
    const resultProfile = isProfile ? authProfile ? authProfile : profile : profile
    const isMyStatus = auth.id === resultProfile.userId
    return <ProfileInfo user={resultProfile} status={statusText} setStatus={setStatusText} isMyStatus={isMyStatus}/>
}