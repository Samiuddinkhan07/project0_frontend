import {useState} from 'react';
import HeaderStyled from  './header.module.css'

const Header = () => {
  return (
    <div className={HeaderStyled['header-wrapper']}>
        <div className={HeaderStyled['header-logo']}>
            <h1>Tasker</h1>
        </div>
        <div className={HeaderStyled['header-menu-list']}>
            <ul className={HeaderStyled['header-menu-wrapper']}>
                <li>
                    <span>
                    <box-icon name='layer'></box-icon>
                    </span>
                    Overview
                </li>
                <li>

                    Projects
                </li>
                <li>
                    Teams
                </li>
                <li>
                    <span><box-icon name='calendar'></box-icon></span>
                    Calender
                </li>
                <li>
                    <span><box-icon name='chat'></box-icon></span>
                    Messages
                </li>
            </ul>
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