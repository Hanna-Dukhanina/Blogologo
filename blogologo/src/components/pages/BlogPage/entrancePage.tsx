import { PinProps } from './type'
import style from './style.module.scss'
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { StateType } from '../../../store/ChangeTheme/types'

type EntranceProps = {
    pin: PinProps
}

export const EntranceContent = ({ pin }: EntranceProps) => {
    const isActiveValue = useSelector((state: StateType) => (state.theme as unknown as StateType).theme)

    return (
        <div className={style['pin']}>
            <div className={style['divImage']}>
                <img className={style['image']} src={pin.image} alt=''></img>
            </div>
            <div className={`${style.divContent} ${isActiveValue === 'dark' ? style['dark_mode'] : ''}`}>
                <div className={style['createdAt']}>{pin.createdAt}</div>
                <div className={style['title']}>
                    <Link to={`/post/${pin.id}`}>{pin.title}</Link>
                </div>
            </div>
        </div>
    )
}  