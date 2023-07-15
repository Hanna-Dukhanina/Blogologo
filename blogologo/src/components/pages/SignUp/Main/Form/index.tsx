import React from 'react'
import style from './style.module.scss'

type Props = {
    title: string
    text?: string
    placeholder?: string
    isError?: boolean
    errorMessage?: string
    inputClassName?: string
    name?: string
    onChange?: string | undefined
}

const InputForm = (props: Props) => {
    const { title, text, placeholder, isError, errorMessage, inputClassName } = props
    return (
        <div className={style.wrapper}>
            <label className={style.label}>{title}</label>
            <input
                className={`${inputClassName ? inputClassName + ' ' : ''}${isError ? style.error : ''}`}
                type='text'
                value={text}
                placeholder={placeholder}
            />
            {
                isError && (
                    <div className={style.error}>
                        {errorMessage}
                    </div>
                )
            }
        </div>
    )
}

export default InputForm