import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import {InputBase, styled} from "@mui/material";

type SearchPropsType = {
    background: string
}

export const Search: React.FC<SearchPropsType> = React.memo(({background}) => {
        const Search = styled('div')(({theme}) => ({
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            background: background,
            '&:hover': {
                backgroundColor: theme.palette.primary.light,
                color: 'white',
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
            color: theme.palette.primary.light,
            '&::placeholder': {//Opera, Chrome,Mozilla
                color: theme.palette.primary.light,
                opacity: 1,
            },

            '&:-ms-input-placeholder': { /* Internet Explorer 10-11 */
                color: theme.palette.primary.light,
            },
            '::-ms-input-placeholder': { /* Microsoft Edge */
                color: theme.palette.primary.light,
            },
        }));
        const StyledInputBase = styled(InputBase)(({theme}) => ({
            color: 'gray',
            '& .MuiInputBase-input': {
                padding: theme.spacing(1, 1, 1, 0),
                // vertical padding + font size from searchIcon
                paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                transition: theme.transitions.create('width'),
                width: '100%',
                [theme.breakpoints.up('sm')]: {
                    width: '18ch',
                    '&:focus': {
                        width: '30ch',
                    },
                },
            },
            '&:hover': {
                color: 'white',
            },
        }));
        const SearchIconWrapper = styled('div')(({theme}) => ({
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
                <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{'aria-label': 'search'}}
            />
        </Search>
    }
)