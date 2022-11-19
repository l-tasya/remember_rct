import React, {useEffect} from 'react';
import {Header} from "./Header";
import {useDispatch} from "react-redux";
import {setUserDataAC} from "../../redux/reducers/authReducer";
import {usersAPI} from '../../api/api';


type HeaderContainerProps = {
    title: string
}
export const HeaderContainer: React.FC<HeaderContainerProps> = React.memo(({title}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        usersAPI.getUserData().then(data => {
            if (data.resultCode === 0) {
                dispatch(setUserDataAC(data.data))
            }

        })
    }, [dispatch])
    return <Header title={title}/>
})