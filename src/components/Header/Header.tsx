import React from 'react';
import s from './Header.module.scss'
import logo from '../../common/img/Purple_Fox.png'
import {Item1} from './Item1/Item1';
import { Item2 } from './Item2/Item2';
import { Item3 } from './Item3/Item3';
import {Search} from "react-feather";

type HeaderPropsType = {
    title: string
}

export const Header: React.FC<HeaderPropsType> = ({title}) => {
    return (
        <div className={s.header}>
            <div className={s.header__logo + " " + s.logo}>
                <img className={s.header__img} src={logo} alt="logo doest exist"/>
                <div className={s.header__title}>{title}</div>
            </div>
            <div className={s.header__search + " " + s.search}>
                <Search color={'#808080'}/><input className={s.input} placeholder={'Search for Friends, Videos and more..'}/>
            </div>
            <div className={s.header__status}>
                <Item1 />
                <Item2 />
                <Item3 />
            </div>
        </div>
    )
}
