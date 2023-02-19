import React from "react";
import {EditProfile} from "./EditProfile";
import {withAuthRedirect} from "../../../common/hoc/WithAuthRedirect";
import {changeProfileThunkCreator} from "../../../redux/reducers/profileReducer";
import {useAppDispatch, useAppSelector} from "../../../common/hook/hooks";
import {IProfile} from "../../../common/types/types";


export const EditProfileContainer: React.FC = () => {
    const profile = useAppSelector(t => t.auth.profile)
    const dispatch = useAppDispatch()
    const saveProfile = (profile: IProfile) => {
        dispatch(changeProfileThunkCreator(profile))
    }
    const Element = withAuthRedirect(EditProfile)
    return <Element profile={profile} saveChanges={saveProfile}/>
}