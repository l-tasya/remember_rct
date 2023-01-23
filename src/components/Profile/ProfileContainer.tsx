import React, {useCallback, useEffect} from "react";
import {Profile} from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getProfileThunkCreator, ProfileUserType} from "../../redux/reducers/profileReducer";
import {AppStateType} from "../../redux/store/store";
import {withAuthRedirect} from "../../common/hoc/WithAuthRedirect";


export const ProfileContainer = React.memo(() => {
    let param = useParams()
    let dispatch = useDispatch()

    const user = useSelector<AppStateType, ProfileUserType>(t => t.profile.profile)
    const getProfile = useCallback((id: string | undefined) => getProfileThunkCreator(id)(dispatch), [dispatch])
    useEffect(() => {
        getProfile(param.userID)
        return () => {
        }

    }, [param.userID, getProfile])
    const Element = withAuthRedirect(Profile)
    return <Element user={user}/>
})
