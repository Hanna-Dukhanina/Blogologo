import React from 'react'
import HeaderSignUp from './Header'
import TemplateBody from './Main'
import style from './style.module.scss'

export const SignUp = () => {
    return (
        <div className={style['SignUp']}>
            <HeaderSignUp />
            <TemplateBody />
        </div>
    )
}