import React, {useEffect} from "react";
import {Header} from "./Header";
import {fetchLoginTC} from "../../redux/reducers/authReducer";
import {useAppDispatch} from "../../common/hook/hooks";

const title = "TASYA NETWORK"

export const HeaderContainer: React.FC = React.memo(() => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetchLoginTC())

    }, [dispatch]);


    return <Header title={title}/>
})