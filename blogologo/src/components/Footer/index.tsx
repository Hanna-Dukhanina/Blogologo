import React, { useContext } from 'react'
import { ToggleContext } from '../context/toggleContext'
import { Toggle } from '../ui/toggle'
import style from './style.module.scss'

const Footer = () => {
    const { isActiveValue, isActiveFunction } = useContext(ToggleContext)

    return (
        <div className={`${style.footer} ${isActiveValue ? style['dark_mode'] : ''}`}>
            <div className={style['contentFooter']}>
                <div className={style['label']}>©2023 Blogologo</div>
                <div className={style['darkTheme']}>
                    <div className={style['text']}>
                        Dark theme
                    </div>
                    <div className={style['button']}>
                        <Toggle onClick={isActiveFunction} className={isActiveValue ? style['isActive'] : ''} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer