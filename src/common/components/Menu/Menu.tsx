import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {StyledIMGBadge} from '../../styles/mui-styles';
import {StyledBlock} from '../../styles/styles';

type MenuPropsType = {
    children: React.ReactNode
    svg: React.ReactNode | null;
}
const MenuContent = styled(StyledBlock)`
    position: absolute;
    padding: 5px 0;
    border: 1px solid #f1f3f4;
    border-radius: 4px;
    font-size: 14px;
    top: 140%;
    align-self: center;
    box-shadow: rgba(0, 0, 0, 0.1) 0 10px 25px -5px, rgba(0, 0, 0, 0.04) 0px 13px 10px -5px;
    transition:3s ease;
   
    
`
const MenuContainer = styled.div`
    position: relative;
    display:flex;
    flex-direction: column;
    justify-content: center;
`
const Badge = styled(StyledIMGBadge)`
    width: 40px;
    height: 40px;
    margin: 0 10px;
    border-radius: 50%;
`
export const Menu: React.FC<MenuPropsType> = ({children, svg}) => {
    let [open, setOpen] = useState(false)


    //styles


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
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    //
    // let iconEl = () => {
    //     switch (icon) {
    //         case 'profile': {
    //             return /><ProfileBadge src={profileIMG}
    //         }
    //         case 'notifications': {
    //             return <NotificationsIcon/>
    //         }
    //         case 'store': {
    //             return <LocalGroceryStoreIcon/>
    //         }
    //         case 'messages': {
    //             return <ChatIcon/>
    //         }
    //         default: {
    //             throw new Error(`dont understand icon${icon}`)
    //         }
    //     }
    // }
    return <MenuContainer ref={wrapperRef}>
        <Badge onClick={() => setOpen(!open)}>{svg}</Badge>
        {open ? <MenuContent padding={"none"} onClick={() => setOpen(false)}>{children}</MenuContent> : ""}
    </MenuContainer>
}