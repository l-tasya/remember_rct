import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store/store";
import {useNavigate} from "react-router-dom";


export const withAuthRedirect = (Component: any) => {
    function RedirectComponent({...rest}) {
        const isAuth = useSelector<AppStateType, boolean>(t => t.auth.isAuth)
        let navigate = useNavigate()
        useEffect(() => {
            if (!isAuth) {
                navigate("/remember_rct/login")
            }
        })
        return <Component {...rest}/>
    }

    return RedirectComponent
}