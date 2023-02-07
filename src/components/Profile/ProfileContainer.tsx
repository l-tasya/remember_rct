import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {useParams} from "react-router-dom";
import {getProfileThunkCreator, getStatusThunkCreator} from "../../redux/reducers/profileReducer";
import {useAppDispatch} from "../../common/hook/hooks";


export const ProfileContainer = React.memo(() => {
    let param = useParams()
    let dispatch = useAppDispatch()
    useEffect(() => {
        if (param) {
            let id = Number(param.userID)
            dispatch(getProfileThunkCreator(id))
            dispatch(getStatusThunkCreator(id))
        }
        return () => {
        }

    }, [param, dispatch])
    return <Profile/>
})
