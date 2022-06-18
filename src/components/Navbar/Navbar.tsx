import React, {CSSProperties} from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.scss'
import {Briefcase, Film, Grid, Headphones, Home, MessageSquare, Settings, Users} from "react-feather";

type NavbarPropsType = {}
export const Navbar: React.FC<NavbarPropsType> = () => {
    const navLinkStyles = (props: { isActive: boolean }): CSSProperties => {
        return {
            color: props.isActive ? '#1e74fd' : 'black',
            fontWeight: props.isActive ? 'bold' : 'normal',
        }
    }
    return (
            <div className={s.navbar}>
                <div className={s.list}>
                    <NavLink style={navLinkStyles} to={'/Home'}><Home size={30} className={s.navbar__item}/></NavLink>
                    <NavLink style={navLinkStyles} to={'/Pages'}><Grid size={30} className={s.navbar__item}/></NavLink>
                    <NavLink style={navLinkStyles} to={'/Videos'}><Film size={30} className={s.navbar__item}/></NavLink>
                    <NavLink style={navLinkStyles} to={'/Groups'}><Users size={30} className={s.navbar__item}/></NavLink>
                    <NavLink style={navLinkStyles} to={'/Jobs'}><Briefcase size={30} className={s.navbar__item}/></NavLink>
                    <NavLink style={navLinkStyles} to={'/Messages'}><MessageSquare size={30}
                                                                                   className={s.navbar__item}/></NavLink>
                    <NavLink className={s.last} style={navLinkStyles} to={'/Music'}><Headphones size={30}
                                                                                                   className={s.navbar__item}/></NavLink>
                    <NavLink className={s.setting}  style={navLinkStyles} to={'/Settings'}><Settings size={30}
                                                                            className={s.navbar__item}/></NavLink>
                </div>
            </div>
    )
}