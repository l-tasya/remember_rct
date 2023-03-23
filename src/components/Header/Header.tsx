import React from 'react';
import styled from 'styled-components';
import {Logo} from './Logo/Logo';
import {Search} from '../Search/Search';
import {StyledTitle} from '../../common/styles/mui-styles';
import {UserMenu} from './Badges/UserMenu';
import {Cart} from './Badges/Cart';
import Paper from '@mui/material/Paper/Paper';
import {Notifications} from './Badges/Notifications';

interface IProps {
    title: string
}

const Wrapper = styled(Paper)`
      grid-area: header;
      display: grid;
      grid-template-columns: 65px 1fr 1fr 1fr;
      align-items: center;
      z-index: 4;
`

const Title = styled(StyledTitle)`
      justify-self: flex-start;
      align-self: center;
      font-weight: 900;
      font-size: 19px;
`

const Navigation = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      position: relative;
     
`
export const Header: React.FC<IProps> = React.memo(({title}) => {
    return (
        <Wrapper square={true}>
            <Logo/>

            <Title value={'main'}>{title}</Title>

            <Search/>

            <Navigation>
                <Cart/>
                <Notifications/>
                <UserMenu/>
            </Navigation>
        </Wrapper>
        )
    }
)