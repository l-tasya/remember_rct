import React from "react";
import {EditProfile} from "./EditProfile";
import {withAuthRedirect} from "../../../../common/hoc/WithAuthRedirect";
import {changeProfilePhotoThunkCreator, changeProfileThunkCreator} from "../../../Profile/profileReducer";
import {useAppDispatch, useAppSelector} from "../../../../common/hook/hooks";
import {IProfile} from "../../../../common/types/types";


export const EditProfileContainer: React.FC = () => {
    const profile = useAppSelector(t => t.auth.profile)
    const dispatch = useAppDispatch()
    const saveProfile = (profile: IProfile) => {
        dispatch(changeProfileThunkCreator(profile))
    }
    const addPhoto = (file: File) => {
        dispatch(changeProfilePhotoThunkCreator(file))
    }
    const Element = withAuthRedirect(EditProfile)
    return <Element profile={profile} saveChanges={saveProfile} savePhoto={addPhoto}/>
}