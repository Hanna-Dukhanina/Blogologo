import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../store/ChangeTheme/types';
import style from './style.module.scss'

export const Toggle = () => {

    const theme = useSelector((state: StateType) => state.theme)
    const dispatch = useDispatch()

    const togglebtn = `${style.toggleBtn} ${(theme as unknown as StateType).theme === 'dark' ? style['dark_mode'] : ''} ${(theme as unknown as StateType).theme === 'dark' ? style['right_position'] : ''}`

    const onClick = () => {
        dispatch({
            type: (theme as unknown as StateType).theme === 'dark' ? 'SET_LIGHT_THEME' : 'SET_DARK_THEME'
        })
    }

    return (
        <div className={style['toggle']}>
            <input
                className={`${togglebtn} `}
                type='button'
                onClick={onClick}
            />
        </div>
    )
}
