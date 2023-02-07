import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import {MenuBadge} from "../../../../common/components/Menu/Menu";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/store/store";
import {DialogType} from "../../../../redux/reducers/dialogsReducer";
import {NavLink} from "react-router-dom";


export const Notifications: React.FC = React.memo(() => {
    let dialogs = useSelector<AppStateType, DialogType[]>(t => t.dialogs.dialogs)
    return <MenuBadge svg={<NotificationsIcon/>}>
        {dialogs.map(d => <NavLink to={`remember_rct/messenger/${d.id}`}
                                   key={d.id}><MenuItem>{d.name}</MenuItem></NavLink>)}

    </MenuBadge>
})