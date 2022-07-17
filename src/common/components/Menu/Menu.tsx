import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";

type ItemType = 'profile' | 'hangouts' | 'store' | 'chat'
type MenuPropsType = {
    icon: ItemType
    items: Array<string>
}
export const Menu: React.FC<MenuPropsType> = ({items, icon}) => {
    let [collapsed, setCollapsed] = useState<boolean>(true)
    const Badge = styled.div`
    
`
    const Menu = styled.div`
    position: absolute;
    background: white;
    border-radius: 4px;
    padding: 4px;
    border: 0.4px solid gray;
 `

    //handlers
    function useOutsideAlerter(ref: any) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event: any) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setCollapsed(true)
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

    return <div ref={wrapperRef}>
        <Badge onClick={() => setCollapsed(false)}>{icon}</Badge>
        {
            collapsed ? '' : <Menu>
                {items.map(t => <div>{t}</div>)}
            </Menu>
        }
    </div>
}