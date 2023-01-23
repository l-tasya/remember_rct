import styled from "@mui/material/styles/styled";
import CancelIcon from "@mui/icons-material/Cancel";
import {ButtonHTMLAttributes, ClassAttributes, HTMLAttributes} from "react";
import {Theme} from "@mui/material";


export const Scroll = styled('div')(({theme}) => ({
    overflowY: 'scroll',
    position: 'absolute',
    width: '100%',
//    firefox
    scrollbarColor: `${theme.palette.primary.main} ${theme.palette.background.paper}`,
    scrollbarWidth: 'thin',
//    google
    '::-webkit-scrollbar': {
        height: '10px',
        width: '8px',
        background: theme.palette.background.paper,
    },
    '::-webkit-scrollbar-thumb': {
        background: theme.palette.primary.main
    }
}))
//content wrap
export const ContentContainerWithoutPadding = styled('div')(() => ({
    width: '100%',
    height: '100%',
}))
export const PaddedContentContainer = styled(Scroll)(({theme}) => ({
    display: 'grid',
    gridTemplateColumns: '1fr 4fr 1fr',
    gridTemplateRows: '1fr',
    gridColumnStart: 2,
    height: '100%',
    backgroundColor: (theme.palette.mode === "dark") ? '#242424' : '#f5f5f5',

}))
//common
export const ProfileBadge = styled('img')(() => ({
    borderRadius: '50%',
    width: '40px',
}))
export const RemoveButton = styled(CancelIcon)(({theme}) => {
    return ({
        color: theme.palette.primary.main,
        fontSize: '15px',
        '&:hover': {
            color: 'red',
            transition: '0.3s',
        }
    })
})

class MUIStyledCommonProps {
}

type VariantsType = 'default' | 'filled'
type SizesType = 'small' | 'medium' | 'large';
type ButtonProps =
    MUIStyledCommonProps
    & ClassAttributes<HTMLButtonElement>
    & ButtonHTMLAttributes<HTMLButtonElement>
    & { theme: Theme }
    & { variant: VariantsType }
    & { size?: SizesType }
export const Button = styled('button')(({theme, variant, size}: ButtonProps) => {
    let values = {
        fontSize: '15px',
        height: '36px',
        padding: '0 16px',
    }
    if (size === 'large') {
        values.height = '52px';
        values.padding = '0 32px';
    }
    if (size === 'small') {
        values.fontSize = '14px';
        values.height = '22px';
        values.padding = '4px 5px';
    }

    return ({
        background: variant === 'filled' ? theme.palette.primary.main : theme.palette.background.paper,
        color: variant === 'filled' ? theme.palette.background.paper : theme.palette.text.primary,
        fontWeight: 500,
        borderRadius: '4px',
        height: values.height,
        fontSize: values.fontSize,
        padding: values.padding,
        transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        margin: '5px 5px',
        boxShadow: ' 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
        ':hover': {
            color: theme.palette.background.paper,
            // background: variant==='filled'?theme.palette.secondary.dark:theme.palette.primary.main,
            filter: variant === 'filled' ? 'brightness(85%)' : '',
            background: variant === 'default' ? theme.palette.primary.main : '',
            transition: '0.3s',
            boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
        },
        ':active': {
            background: theme.palette.primary.light
        },
        ':disabled': {
            opacity: '0.3',
        }
    })
})
type FollowButtonProps =
    MUIStyledCommonProps
    & ClassAttributes<HTMLButtonElement>
    & ButtonHTMLAttributes<HTMLButtonElement>
    & { theme: Theme }
    & { follow?: boolean };
export const FollowButton = styled(Button)(({theme, follow}: FollowButtonProps) => {
    return ({
        background: follow ? theme.palette.primary.main : theme.palette.background.paper,
        color: follow ? theme.palette.primary.light : theme.palette.text.primary,

    })
})
type TitleProps =
    MUIStyledCommonProps
    & ClassAttributes<HTMLDivElement>
    & HTMLAttributes<HTMLDivElement>
    & { theme: Theme }
    & { value: 'main' | 'default' | 'light' | 'gray' }
export const Title = styled('div')(({theme, value}: TitleProps) => {
    let valueReducer = (value: 'main' | 'default' | 'light' | 'gray') => {
        switch (value) {
            case "default": {
                return theme.palette.text.primary;
            }
            case "gray": {
                return theme.palette.text.secondary
            }
            case "light": {
                return theme.palette.primary.light
            }
            case "main": {
                return theme.palette.primary.main
            }
        }
    }
    return ({
        display: 'inline-block',
        color: valueReducer(value)
    })
})

export const StyledIMGBadge = styled('div')(({theme}) => ({
    background: theme.palette.divider,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "svg": {
        color: theme.palette.primary.main,
        fontSize: "24px",
    },
    ":hover": {
        background: theme.palette.primary.light,
        "svg": {
            color: "white"
        }
    },
    ":active": {
        background: theme.palette.divider,
        "svg": {
            color: theme.palette.primary.dark
        }
    }
}))
export const Paper = styled('div')(({theme}) => ({
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
}))