import React from 'react'
import SignInButton from '../ButtonSignIn'
import { ExportForm } from './Form/exportForm'
import style from './style.module.scss'

const TemplateBody = () => {
    return (
        <div className={style['shell']}>
            <div className={style['templateBody']}>
                <div className={style['highPart']}>
                    <ExportForm />
                </div>
                <div className={style['lowPart']}>
                    <div className={style['signIn']}>
                        Already have an account?
                        <SignInButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TemplateBody