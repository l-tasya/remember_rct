import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../common/hook/hooks";
import {useParams} from "react-router-dom";
import {getProfileThunkCreator, getStatusThunkCreator} from "./profileReducer";
import {Loading} from "../../components/Loading/Loading";
import {Profile} from "./Profile";
import styled from "styled-components";
import {PaddedContentContainer} from "../../common/styles/mui-styles";

const Wrapper = styled(PaddedContentContainer)`
  position: absolute;
  height: 100%;
  padding: 0;
`
export const ProfileContainer: React.FC = () => {
    let auth = useAppSelector(t => t.auth)
    const authProfile = useAppSelector(t => t.auth.profile)
    const profile = useAppSelector(t => t.profile.profile)
    const dispatch = useAppDispatch()
    let isProfile = false;
    let {userID} = useParams()

    if ((userID === 'profile') || (userID === '15744')) {
        if (auth.isAuth) {
            if (!isProfile) {
                isProfile = true
            }

        }
    } else {
        if (isProfile) {
            isProfile = false
        }

    }
    useEffect(() => {
        if (!isProfile) {
            dispatch(getProfileThunkCreator(Number(userID)))
        }
        if (isProfile) {
            dispatch(getStatusThunkCreator(Number(auth.id)))
        }
    }, [userID, dispatch, auth.id, isProfile])

    const resultProfile = isProfile ? authProfile : profile

    return (!resultProfile) ?
        <Loading loading={true}/>
        :
        <Wrapper>
            <Profile profile={resultProfile}/>
        </Wrapper>
}