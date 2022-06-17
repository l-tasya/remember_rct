import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Button} from "@mui/material";
import {Bell} from "react-feather";

type Item2PropsType = {

}

export const Item2: React.FC<Item2PropsType> = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (<div>
            <Button size='medium' onClick={handleClick}>
                <Bell/>
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Message</MenuItem>
                <MenuItem onClick={handleClose}>Message</MenuItem>
                <MenuItem onClick={handleClose}>Message</MenuItem>
            </Menu>
        </div>
    )
}
