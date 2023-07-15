import React, { useContext } from 'react'
import style from './style.module.scss'
import logo from '../Header/img/Logo.svg'
import lupa from '../Header/img/Lupa.svg'
import UserBtn from './ButtonUser'
import { ToggleContext } from '../context/toggleContext'

export const Header = () => {
    const { isActiveValue } = useContext(ToggleContext)

    return (
        <div className={`${style.shellHeader} ${isActiveValue ? style['dark_mode'] : ''}`}>
            <div className={style.header}>
                <div className={style['logo']}>
                    <img className={style['img']} src={logo} alt='' />
                    <div className={style.text}>BLOGOLOGO</div>
                </div>
                <div className={style['authorize']}>
                    <div className={style['search']}>
                        <img
                            className={`${style.img} ${isActiveValue ? style['dark_mode'] : ''}`}
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
