import React, {useEffect, useRef, useState} from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store/store";
import ChatIcon from '@mui/icons-material/Chat';
import {ThemeColorType} from "../../../redux/reducers/settingsReducer";
import {ProfileBadge, StyledIMGBadge} from "../../styles/styles";
import img from './../../img/eral.jpg';

type BadgeType = 'profile' | 'notifications' | 'store' | 'messages'
type MenuPropsType = {
    icon: BadgeType
    children: React.ReactNode
}

export const Menu: React.FC<MenuPropsType> = ({children, icon}) => {
    //TODO:props with profileIMG
    let [open, setOpen] = useState(false)
    let profileIMG = img
    let color = useSelector<AppStateType, ThemeColorType>(t => t.settings.themeColor)
    //styles
    const Badge = styled(StyledIMGBadge)`
    width: 40px;
    height: 40px;
    margin: 0 10px;
        border-radius: 50%;
        svg{
        color: ${color.first};
        }
    :hover{
    background: ${color.second};
    color: white;
    svg{
    color: white
    }
    
    }
    `
    const MenuContent = styled.div`
    position: absolute;
    padding: 8px;
border: 1px solid #f1f3f4;
    border-radius: 4px;
    background: white;
    width: 250px;
    top: 40px;
    left: -50%;
    font-size: 14px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 10px 25px -5px, rgba(0, 0, 0, 0.04) 0px 13px 10px -5px;
    transition:3s ease
   
    
`
    const MenuContainer = styled.div`
    position: relative;
    display:flex;
    flex-direction: column;
    justify-content: center;
`
    const Profile = styled(ProfileBadge)`
    border: 1px solid ${color.first};
`

    //handlers
    function useOutsideAlerter(ref: any) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpen(false)
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    let iconEl = () => {
        switch (icon) {
            case 'profile': {
                return <Profile src={profileIMG}/>
            }
            case 'notifications': {
                return <NotificationsIcon/>
            }
            case 'store': {
                return <LocalGroceryStoreIcon/>
            }
            case 'messages': {
                return <ChatIcon/>
            }
            default: {
                throw new Error(`dont understand icon${icon}`)
            }
        }
    }
    return <MenuContainer ref={wrapperRef}>
        <Badge onClick={() => setOpen(!open)}>{iconEl()}</Badge>
        {open ? <MenuContent onClick={() => setOpen(false)}>{children}</MenuContent> : ''}
    </MenuContainer>
}