import React from 'react';
import styled from 'styled-components';
import {StyledBlock} from '../../../common/styles/styles';
import PersonIcon from '@mui/icons-material/Person';
import Skeleton from '@mui/material/Skeleton/Skeleton';
import {NavLink} from 'react-router-dom';
import {Button} from '../../../common/styles/mui-styles';
import useTheme from '@mui/material/styles/useTheme';
import {useAppSelector} from "../../../common/hook/hooks";

//styles
const Container = styled(StyledBlock)`
  display: grid;
  grid-template-rows: 2fr 1fr;
  padding: 8px;
`
const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 100%;
  background: ${(props: { color: string }) => props.color}
`
const SkeletonEl = styled(Skeleton)`

`
const NavItem = styled(NavLink)`
  position: relative;

  &:hover {
    #content {
      transition: 0.3s;
      color: ${(props: { hover: string }) => props.hover}
    }
  }
`
const Content = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 66%;
  display: flex;
  justify-content: center;
  align-items: end;
  color: #3f424b;

  div {
    background: white;
    border-radius: 8px 8px 0 0;
    padding: 3px 8px 3px 8px;
    font-weight: 700;
    font-size: 13px;
  }
`
const SubTitle = styled.div`
  color: #777a87;
  font-weight: 500;
  font-size: 11px;
  justify-self: center;
  max-width: 150px;

`
const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 80%;
  }
`
const IMG = styled.img`
  width: 40%;
  border-radius: 50%;
  position: absolute;
`
export type UserPropsType = {
    name: string
    id: number
    status?: string
    photo?: {
        large?: string
        small?: string
    }
    followed: boolean
    loading: boolean
    follow: (id: number) => void
    unFollow: (id: number) => void
}
export const User: React.FC<UserPropsType> = React.memo(({
                                                             photo,
                                                             name,
                                                             status,
                                                             followed,
                                                             loading,
                                                             id,
                                                             follow,
                                                             unFollow
                                                         }) => {
    const theme = useTheme();
    //array of disabled buttons
    const array = useAppSelector(t => t.users.followingInProgress);
    //user IMG
    const img = Boolean(photo?.large || photo?.small) ? <IMG src={photo?.small || photo?.large} alt=""/> : <PersonIcon/>

    return loading ? <Container>
            <div style={{position: 'relative'}}>
                <SkeletonEl variant={'rounded'} sx={{height: '100%'}}/>
                <Content id={"content"}>
                    <div><SkeletonEl variant={'text'} style={{width: '50px'}}/></div>
                </Content>
                <Footer style={{height: '100%'}}>
                    <SkeletonEl variant={'rounded'}/>
                </Footer>
            </div>
            <Footer>
                <SkeletonEl style={{height: '100%', width: '150px'}}/>
            </Footer>
        </Container>
        :
        <Container>
            <NavItem hover={theme.palette.primary.light} to={`/remember_rct/${id}/`}>
                <Background color={theme.palette.primary.light}>
                    {
                        img
                    }
                </Background>
                <Content id={"content"}>
                    <div>{name}</div>
                </Content>
            </NavItem>
            <Footer>
                {followed ?
                    <Button
                        variant='filled'
                        onClick={() => unFollow(id)}
                        disabled={array.some(t => t === id)}>Following</Button>
                    :
                    <Button variant='default'
                            onClick={() => follow(id)}
                            disabled={array.some(t => t === id)}>Follow</Button>
                }
                {status && <SubTitle>{status}</SubTitle>}
            </Footer>
        </Container>
})