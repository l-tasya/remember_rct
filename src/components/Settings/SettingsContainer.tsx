import React, {useEffect} from "react";
import {Settings} from "./Settings";
import {useNavigate} from "react-router-dom";


export const SettingsContainer: React.FC = React.memo(() => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("theme")
    }, [])
    return <Settings
    />

})