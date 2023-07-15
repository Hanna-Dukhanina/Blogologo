import React, { useReducer } from 'react'
import style from './style.module.scss'
import off from '../switchOff.svg'

type StateType = {
    theme: 'day' | 'night'
}

type ActionType = {
    type: string
}

const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case 'SET_DAY_THEME':
            return {
                theme: 'day'
            }
        case 'SET_NIGHT_THEME':
            return {
                theme: 'night'
            }
        default:
            return state
    }
}

export const ChangeTheme = ({ onChange }: { onChange: (theme: 'day' | 'night') => void }) => {
    const [state, dispatch] = useReducer(reducer, { theme: 'night' })

    const onClick = () => {
        dispatch({
            type: state.theme !== 'day'
                ? 'SET_DAY_THEME'
                : 'SET_NIGHT_THEME'
        })
        onChange(state.theme)
    }

    onChange(state.theme)

    return (
        <div className={`${style['theme-wrapper']} ${style[state.theme]}`}>
            <button onClick={onClick}>
                <img src={off} alt='' />
            </button>
        </div>
    )
}
