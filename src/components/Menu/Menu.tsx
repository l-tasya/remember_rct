import React from "react";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import styled from "@mui/material/styles/styled";

interface IPropsItem {
    svg: React.ReactNode | null
    children: React.ReactNode[] | React.ReactNode
}

const Badge = styled(IconButton)(({theme}) => ({
    "svg": {
        color: theme.palette.primary.main
    },
    "div": {}
}))

export const MenuBadge: React.FC<IPropsItem> = React.memo(({svg, children}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>

            <Badge
                onClick={handleClick}
                size="small"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
            >
                <Avatar sx={{
                    width: "2.5rem",
                    height: "2.5rem",
                    background: (theme) => theme.palette.divider
                }}>{svg}</Avatar>
            </Badge>
            <Menu
                anchorEl={anchorEl}
                open={open}
                sx={{mt: 1.5}}
                onClose={handleClose}
                anchorOrigin={{horizontal: "center", vertical: "bottom"}}
                transformOrigin={{horizontal: "center", vertical: "top"}}
            >
                {
                    Array.isArray(children) ? children?.map((t: React.ReactNode, i) => <div
                        onClick={handleClose} key={i}>{t}</div>) : children
                }
            </Menu>
        </React.Fragment>
    );
})