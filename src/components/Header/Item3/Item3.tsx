import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Button} from "@mui/material";
import {ShoppingCart} from "react-feather";


export const Item3: React.FC = () => {
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
                <ShoppingCart/>
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>$$$</MenuItem>
                <MenuItem onClick={handleClose}>$$$</MenuItem>
                <MenuItem onClick={handleClose}>$$$</MenuItem>
            </Menu>
        </div>
    )
}
