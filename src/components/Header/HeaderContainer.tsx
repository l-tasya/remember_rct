import React, {useCallback, useEffect} from 'react';
import {Header} from "./Header";
import {useDispatch} from "react-redux";
import {getUserDataThunkCreator} from "../../redux/reducers/authReducer";


type HeaderContainerProps = {
    title: string
}
export const HeaderContainer: React.FC<HeaderContainerProps> = React.memo(({title}) => {
    const dispatch = useDispatch()
    const getUserData = useCallback(() => {
        getUserDataThunkCreator()(dispatch)
    }, [dispatch])
    useEffect(() => {
        getUserData()
    }, [getUserData])
    return <Header title={title}/>
})