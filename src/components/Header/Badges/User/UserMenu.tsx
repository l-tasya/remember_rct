import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import {Logout, PersonAdd} from "@mui/icons-material"
import Settings from "@mui/icons-material/Settings";
import {MenuBadge} from "../../../../common/components/Menu/Menu";
import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";
import {useAppSelector} from "../../../../common/hook/hooks";


export const UserMenu: React.FC = React.memo(() => {
    let auth = useAppSelector(t => t.auth)
    let profile = useAppSelector(t => t.profile.profile)
    let avatar: string | undefined = profile.photos.small ? profile.photos.small : ""
    return auth.isAuth ? <MenuBadge svg={<PersonIcon/>}>
            <NavLink to={`remember_rct/${auth.id}/posts`}><MenuItem>
                <Avatar src={avatar}
                        sx={{width: 32, height: 32, mr: 1}}/> {profile.fullName}

            </MenuItem>
            </NavLink>
            <Divider/>
            <MenuItem>

                <ListItemIcon>
                    <PersonAdd fontSize="small"/>
                </ListItemIcon>
                Add another account

            </MenuItem>
            <MenuItem>
                <NavLink to={"remember_rct/settings"}>
                    <ListItemIcon>
                        <Settings fontSize="small"/>
                    </ListItemIcon>
                    Settings
                </NavLink>
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <Logout fontSize="small"/>
                </ListItemIcon>
                Logout
            </MenuItem>
        </MenuBadge>
        :
        <NavLink to={"remember_rct/login"}>
            <Button size={"small"} variant={"contained"}>login</Button>
        </NavLink>
})