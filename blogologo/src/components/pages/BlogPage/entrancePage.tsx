import { PinProps } from './type'
import style from './style.module.scss'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ToggleContext } from '../../context/toggleContext'

type EntranceProps = {
    pin: PinProps
}

export const EntranceContent = ({ pin }: EntranceProps) => {
    const { isActiveValue } = useContext(ToggleContext)

    return (
        <div className={style['pin']}>
            <div className={style['divImage']}>
                <img className={style['image']} src={pin.image} alt=''></img>
            </div>
            <div className={`${style.divContent} ${isActiveValue ? style['dark_mode'] : ''}`}>
                <div className={style['createdAt']}>{pin.createdAt}</div>
                <div className={style['title']}>
                    <Link to={`/entrancePage/${pin.id}`}>{pin.title}</Link>
                </div>
            </div>
        </div>
    )
}  