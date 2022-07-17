import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import {InputBase, styled} from "@mui/material";

type SearchPropsType = {
    hoverColor: string
    background: string
}

export const Search: React.FC<SearchPropsType> = ({hoverColor, background}) => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        background: background,
        '&:hover': {
            backgroundColor: hoverColor,
            color: 'white',
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
        color: 'gray'

    }));
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'gray',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '30ch',
                },
            },
        },
        '&:hover': {
            color: 'white',
        },
    }));
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));
    return <Search>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
        />
    </Search>
}