import React from 'react'
import style from './style.module.scss'
import logo from '../Header/img/Logo.svg'
import lupa from '../Header/img/Lupa.svg'
import UserBtn from './ButtonUser'
import { useSelector } from 'react-redux'
import { StateType } from '../../store/ChangeTheme/types'

export const Header = () => {
    const isActiveValue = useSelector((state: StateType) => (state.theme as unknown as StateType).theme)

    return (
        <div className={`${style.shellHeader} ${isActiveValue === 'dark' ? style['dark_mode'] : ''}`}>
            <div className={style.header}>
                <div className={style['logo']}>
                    <img className={style['img']} src={logo} alt='' />
                    <div className={style.text}>BLOGOLOGO</div>
                </div>
                <div className={style['authorize']}>
                    <div className={`${style.search} ${isActiveValue === 'dark' ? style['dark_mode'] : ''}`}>
                        <img
                            className={style.imgLupa}
                            src={lupa}
                            alt=''
                        />
                    </div>
                    <UserBtn />
                </div>
            </div>
        </div>
    )
}
