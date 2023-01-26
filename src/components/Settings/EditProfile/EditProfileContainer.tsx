import React, {useEffect} from "react";
import {EditProfile} from "./EditProfile";
import {withAuthRedirect} from "../../../common/hoc/WithAuthRedirect";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/store";
import {
    changeProfileThunkCreator,
    getProfileThunkCreator, getStatusThunkCreator,
    ProfileUserType, updateStatusThunkCreator
} from "../../../redux/reducers/profileReducer";


export const EditProfileContainer: React.FC = React.memo(() => {
    let authID = useSelector<AppStateType, any>(t => t.auth.id)
    const profile = useSelector<AppStateType, ProfileUserType>(t => t.profile.profile)
    const status = useSelector<AppStateType, string>(t => t.profile.status)
    const dispatch = useDispatch()
    useEffect(() => {
        if (profile.userId !== authID) {
            getProfileThunkCreator(authID)(dispatch)
            getStatusThunkCreator(authID)(dispatch)
        }
    }, [authID, profile.userId, dispatch])


    const saveProfile = (profile: ProfileUserType, status: string) => {
        changeProfileThunkCreator(profile)()
        updateStatusThunkCreator(status)(dispatch)
    }
    const Element = withAuthRedirect(EditProfile)
    return <Element user={profile} saveChanges={saveProfile} status={status}/>
})