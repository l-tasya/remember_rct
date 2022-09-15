import React, {useEffect} from "react";
import {Profile} from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {defaultUser, ProfileUserType, setProfileAC} from "../../redux/reducers/profileReducer";
import axios from "axios";
import {AppStateType} from "../../redux/store/store";


export const ProfileContainer = () => {
    let param = useParams()
    let dispatch = useDispatch()

    const user = useSelector<AppStateType, ProfileUserType>(t=>t.profile.profile)
    const setUserCallback = (user: ProfileUserType)=>{
        dispatch(setProfileAC(user))
    }

    useEffect(()=>{
        axios(`https://social-network.samuraijs.com/api/1.0/profile/${param.userID}`)
            .then(response=>{
                if(param.userID === 'main'){
                    setUserCallback(defaultUser)
                }else{
                    setUserCallback(response.data)
                }
            })

    },[])
    return <Profile user={user}/>
}