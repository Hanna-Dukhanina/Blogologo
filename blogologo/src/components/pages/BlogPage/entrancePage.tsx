import { PinProps } from './type'
import style from './style.module.scss'
import React from 'react'
import { Link } from 'react-router-dom'

type EntranceProps = {
    pin: PinProps
}

export const EntranceContent = ({ pin }: EntranceProps) => {

    return (
        <div className={style['pin']}>
            <div className={style['divImage']}>
                <img className={style['image']} src={pin.image} alt=''></img>
            </div>
            <div className={style['divContent']}>
                <div className={style['createdAt']}>{pin.createdAt}</div>
                <div className={style['title']}>
                    <Link to={`/entrancePage/${pin.id}`}>{pin.title}</Link>
                </div>
            </div>
        </div>
    )
}  