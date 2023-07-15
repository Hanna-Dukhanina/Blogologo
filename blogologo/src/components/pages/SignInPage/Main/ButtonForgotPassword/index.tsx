import React from "react"
import { useState } from 'react'
import style from './style.module.scss'

type Props = {
    text: string
    onClick: () => void
}

const FPBtn = (props: Props) => {

    const [isClicked, setIsClicked] = useState(false)
    const handleClick = () => {
        setIsClicked(true);
        props.onClick();
    }
    const clickedBut = isClicked ? style.clickedButton : ''

    return (
        <input
            className={`${style.forgotPasswordBtn} ${clickedBut}`}
            type='button'
            value={props.text}
            onClick={handleClick}
        />
    )
}

export default FPBtn