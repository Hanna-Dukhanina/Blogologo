import React from 'react'
import { useSelector } from 'react-redux'
import { StateType } from '../../store/ChangeTheme/types'
import { Toggle } from '../ui/toggle'
import style from './style.module.scss'

const Footer = () => {
    const isActiveValue = useSelector((state: StateType) => state.theme)

    return (
        <div className={`${style.footer} ${isActiveValue ? style['dark_mode'] : ''}`}>
            <div className={style['contentFooter']}>
                <div className={style['label']}>©2023 Blogologo</div>
                <div className={style['darkTheme']}>
                    <div className={style['text']}>
                        Dark theme
                    </div>
                    <div className={style['button']}>
                        <Toggle />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer