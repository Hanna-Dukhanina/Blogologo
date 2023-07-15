import React from "react"
import style from './style.module.scss'

type Props = {
    text: string
}

const Submit = (props: Props) => {

    return (
        <input
            className={`${style.signUpBtn}`}
            type='submit'
            value={props.text}
        />
    )
}

export default Submit