import styled from "@mui/material/styles/styled";
import CancelIcon from "@mui/icons-material/Cancel";
import {ButtonHTMLAttributes, ClassAttributes, HTMLAttributes} from "react";
import {Theme} from "@mui/material";


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
type ButtonProps =
    MUIStyledCommonProps
    & ClassAttributes<HTMLButtonElement>
    & ButtonHTMLAttributes<HTMLButtonElement>
    & { theme: Theme }
    & { variant: VariantsType };
export const Button = styled('button')(({theme, variant}: ButtonProps) => {
    return ({
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;',
        background: variant === 'filled' ? theme.palette.primary.main : theme.palette.background.paper,
        color: variant === 'filled' ? theme.palette.background.paper : theme.palette.text.primary,
        fontWeight: 700,
        borderRadius: '4px',
        height: '30px',
        padding: '2px 16px',
        transition: '0.1s',
        margin: '5px 10px',
        ':hover': {
            color: theme.palette.background.paper,
            // background: variant==='filled'?theme.palette.secondary.dark:theme.palette.primary.main,
            filter: variant === 'filled' ? 'brightness(85%)' : '',
            background: variant === 'default' ? theme.palette.primary.main : '',
            transition: '0.1s',
        },
        ':active': {
            background: theme.palette.primary.light
        }
    })
})
type FollowButtonProps =
    MUIStyledCommonProps
    & ClassAttributes<HTMLButtonElement>
    & ButtonHTMLAttributes<HTMLButtonElement>
    & { theme: Theme }
    & { follow: boolean };
export const FollowButton = styled(Button)(({theme, follow}: FollowButtonProps) => {
    return ({
        background: follow ? theme.palette.primary.main : theme.palette.background.paper,
        color: follow ? theme.palette.primary.light : theme.palette.text.primary,

    })
})
type Title =
    MUIStyledCommonProps
    & ClassAttributes<HTMLDivElement>
    & HTMLAttributes<HTMLDivElement>
    & { theme: Theme }
    & { value: 'main' | 'default' | 'light' | 'gray' }

export const Title = styled('div')(({theme, value}: Title) => {
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
    background: '#f1f1f1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    'svg': {
        color: theme.palette.primary.main,
        fontSize: '24px',
    },
    ':hover': {
        background: theme.palette.primary.light,
        color: theme.palette.background.paper,
        'svg': {
            color: theme.palette.background.paper
        }
    }
}))