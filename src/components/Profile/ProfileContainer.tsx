import React, {useCallback, useEffect} from "react";
import {Profile} from "./Profile";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {getProfileThunkCreator, getStatusThunkCreator} from "../../redux/reducers/profileReducer";


export const ProfileContainer = React.memo(() => {
    let param = useParams()
    let dispatch = useDispatch()

    const getProfile = useCallback((id: number) => {
        getProfileThunkCreator(id)(dispatch)
    }, [dispatch])
    const getStatus = useCallback((id: number) => {
        getStatusThunkCreator(id)(dispatch)
    }, [dispatch])
    useEffect(() => {
        if (param) {
            let id = Number(param.userID)
            getProfile(id)
            getStatus(id)
        }
        return () => {
        }

    }, [param.userID, getProfile, getStatus,])
    return <Profile/>
})
