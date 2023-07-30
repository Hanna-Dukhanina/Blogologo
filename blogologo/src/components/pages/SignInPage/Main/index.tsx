import React from 'react'
import { SignUp } from '../../SignUp'
import { ExportForm } from './Form/exportPassword'
import style from './style.module.scss'

const TemplateBody = () => {
    return (
        <div className={style['shell']}>
            <div className={style['templateBody']}>
                <div className={style['highPart']}>
                    <ExportForm />
                </div>
                <div className={style['lowPart']}>
                    <div className={style['signUp']}>
                        Don't have an account?
                        <a href='/pageSignUp' className={style['signUp']} onClick={SignUp}>Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TemplateBody