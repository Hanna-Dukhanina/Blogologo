import React from 'react'
import HeaderSignIn from './Header'
import TemplateBody from './Main'
import style from './style.module.scss'

export const SignIn = () => {
    return (
        <div className={style['SignIn']}>
            <HeaderSignIn />
            <TemplateBody />
        </div>
    )
}