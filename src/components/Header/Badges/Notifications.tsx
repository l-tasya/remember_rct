import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import {MenuBadge} from '../../Menu/Menu';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../app/store';
import {DialogType} from '../../../features/Messenger/Dialogs/dialogsReducer';
import {NavLink} from 'react-router-dom';


export const Notifications: React.FC = () => {
    let dialogs = useSelector<AppStateType, DialogType[]>(t => t.dialogs.dialogs)
    return <MenuBadge svg={<NotificationsIcon/>}>
        {dialogs.map(d => <NavLink to={`remember_rct/messenger/${d.id}`}
                                   key={d.id}><MenuItem>{d.name}</MenuItem></NavLink>)}

    </MenuBadge>
}