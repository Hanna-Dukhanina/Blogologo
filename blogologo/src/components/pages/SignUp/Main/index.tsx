import React from 'react'
import { SignIn } from '../../SignInPage'
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
                        <a href='/pageSignIn' className={style['signIn']} onClick={SignIn}>Sign in</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TemplateBody