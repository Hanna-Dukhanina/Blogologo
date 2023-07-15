import React from 'react'
import style from './style.module.scss'

interface Itoggle {
    className?: string;
    onClick: () => void
}

export const Toggle = (props: Itoggle) => {
    const toggleClassName = props.className ? props.className : '';
    return (
        <div className={style.toggle}>
            <input
                className={`${style.toggleBtn} ${toggleClassName}`}
                type='button'
                onClick={props.onClick}
            />
        </div>
    )
}
