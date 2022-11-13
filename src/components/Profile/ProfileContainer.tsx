import React, {useCallback, useEffect} from "react";
import {Profile} from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {defaultUser, ProfileUserType, setProfileAC} from "../../redux/reducers/profileReducer";
import axios from "axios";
import {AppStateType} from "../../redux/store/store";


export const ProfileContainer = React.memo(() => {
    let param = useParams()
    let dispatch = useDispatch()

    const user = useSelector<AppStateType, ProfileUserType>(t => t.profile.profile)
    const setUserCallback = useCallback((user: ProfileUserType) => {
        dispatch(setProfileAC(user))
    },[dispatch])

    useEffect(() => {
        if (param.userID === 'main') {
            setUserCallback(defaultUser)
        } else {
            axios(`https://social-network.samuraijs.com/api/1.0/profile/${param.userID}`)
                .then(response => {
                    setUserCallback(response.data)
                })
                .catch((error) => {
                    if (error.response.status) {
                        setUserCallback({
                            fullName: `API not working on github.io`,
                            lookingForAJob: false,
                            contacts: {},
                            photos: {},
                            userId: Number(param.userId)
                        })
                    }
                })
        }

    }, [param.userID, user, setUserCallback])
    return <Profile user={user}/>
})