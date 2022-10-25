import React, {useEffect} from 'react';
import {Header} from "./Header";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setUserDataAC} from "../../redux/reducers/authReducer";


type HeaderContainerProps = {
    title: string
}
export const HeaderContainer: React.FC<HeaderContainerProps> = React.memo(({title}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((response: any) => {
                if (response.data.resultCode === 0) {
                    dispatch(setUserDataAC(response.data.data))
                } else {
                    dispatch(setUserDataAC({email: '', id: 1, login: 'tasya'}))
                }

            })
    }, [dispatch])
    return <Header title={title}/>
})