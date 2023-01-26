import React from "react";
import {EditProfile} from "./EditProfile";
import {withAuthRedirect} from "../../../common/hoc/WithAuthRedirect";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/store";
import {changeProfileThunkCreator, ProfileUserType} from "../../../redux/reducers/profileReducer";


export const EditProfileContainer: React.FC = React.memo(() => {
    const profile = useSelector<AppStateType, ProfileUserType>(t => t.profile.profile)
    const Element = withAuthRedirect(EditProfile)
    const saveProfile = (profile: ProfileUserType) => {
        changeProfileThunkCreator(profile)()
    }
    return <Element user={profile} saveChanges={saveProfile}/>
})