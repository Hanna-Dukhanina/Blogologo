import React, { useContext } from 'react'
import { ToggleContext } from '../context/toggleContext';
import style from './style.module.scss'

interface Itoggle {
    className?: string;
    onClick: () => void
}

export const Toggle = (props: Itoggle) => {
    const toggleClassName = props.className ? props.className : '';

    const { isActiveValue } = useContext(ToggleContext)

    const togglebtn = `${style.toggleBtn} ${isActiveValue ? style['dark_mode'] : ''}`

    return (
        <div className={style.toggle}>
            <input
                className={`${togglebtn} ${toggleClassName}`}
                type='button'
                onClick={props.onClick}
            />
        </div>
    )
}
