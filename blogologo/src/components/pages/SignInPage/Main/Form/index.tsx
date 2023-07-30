import React from 'react'
import style from './style.module.scss'

type Props = {
    title: string
    value?: string
    placeholder?: string
    isError?: boolean
    errorMessage?: string
    inputClassName?: string
    onChange?: any
}

const InputForm = (props: Props) => {
    const { title, value, placeholder, isError, errorMessage, inputClassName, onChange } = props
    return (
        <div className={style.wrapper}>
            <label className={style.label}>{title}</label>
            <input
                className={`${inputClassName ? inputClassName + ' ' : ''}${isError ? style.error : ''}`}
                type='text'
                placeholder={placeholder}
                value={value}
                onChange={onChange}
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