import { Console } from 'console';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { StateType } from '../../store/ChangeTheme/types';
import style from './style.module.scss'

export const Toggle = () => {

    const theme = useSelector((state: StateType) => state.theme)
    // console.log(theme)
    const dispatch = useDispatch()

    const togglebtn = `${style.toggleBtn} ${theme === 'dark' ? style['dark_mode'] : ''} ${theme === 'dark' ? style['right_position'] : ''}`

    const onClick = () => {
        console.log('Button clicked!')
        dispatch({
            type: theme === 'light' ? 'SET_LIGHT_THEME' : 'SET_DARK_THEME'
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
