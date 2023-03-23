import React, {useCallback} from 'react';
import {updateStatusThunkCreator} from '../profileReducer';
import {ProfileInfo} from './ProfileInfo';
import {useAppDispatch, useAppSelector} from '../../../common/hook/hooks';
import {IProfile} from '../../../common/types/types';

export const ProfileInfoContainer: React.FC<{ profile: IProfile }> = ({profile}) => {
    let auth = useAppSelector(t => t.auth)
    let statusText = useAppSelector(s => s.profile.status)
    const dispatch = useAppDispatch()

    const setStatusText = useCallback((status: string) => {
        dispatch(updateStatusThunkCreator(status))
    }, [dispatch])
    const isMyStatus = auth.id === profile?.userId
    return (statusText === undefined) ? <div>loading</div> :
        <ProfileInfo user={profile} status={statusText!} setStatus={setStatusText} isMyStatus={isMyStatus}/>
}