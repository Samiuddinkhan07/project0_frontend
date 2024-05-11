import {useState} from 'react';
import HeaderStyled from  './header.module.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className={HeaderStyled['header-wrapper']}>
        <div className={HeaderStyled['header-logo']}>
            <h1>Tasker</h1>
        </div>
        <div className={HeaderStyled['header-menu-list']}>
            <div className={HeaderStyled['header-menu-wrapper']}>
                <NavLink to='/dashboard/' className={({isActive}) => isActive ? `${HeaderStyled['active-Header']}` : `${HeaderStyled['non-activeheader']} ` `${HeaderStyled['basic-styles']} `}>
                    <span>
                    <box-icon name='layer'></box-icon>
                    </span>
                    Overview
                </NavLink>
                <NavLink to='/dashboard/teams' className={({isActive}) => isActive ? `${HeaderStyled['active-Header']}` : `${HeaderStyled['non-activeheader']} `}>
                    Teams
                </NavLink>
                <NavLink to='/dashboard/calender' className={({isActive}) => isActive ? `${HeaderStyled['active-Header']}` : `${HeaderStyled['non-activeheader']} `}>
                    <span><box-icon name='calendar'></box-icon></span>
                    Calender
                </NavLink>
                <NavLink to='/dashbboard/messages' className={({isActive}) => isActive ? `${HeaderStyled['active-Header']}` : `${HeaderStyled['non-activeheader']} `}>
                    <span><box-icon name='chat'></box-icon></span>
                    Messages
                </NavLink>
            </div>
        </div>
        <div className={HeaderStyled['header-menu-right-list']}>
            <ul className={HeaderStyled['header-menu-right-wrapper']}>
                <li>
                    <span><box-icon name='cog'></box-icon></span>
                </li>
                <li>
                <box-icon name='bell'></box-icon>
                </li>
                <li>
                <box-icon name='user' color='#ffffff' ></box-icon>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header