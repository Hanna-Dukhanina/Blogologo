import React from 'react'
import InputForm from '.'
import SignInButton from '../../ButtonSignIn/exportSignIn'
import FPButton from '../ButtonForgotPassword/exportForgotPassword'
import style from './style.module.scss'


export const ExportForm = () => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
    }
    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.inputs}>
                <InputForm
                    inputClassName={style.email}
                    title={'Email'}
                    placeholder={'Your email'}
                    isError={false}
                    errorMessage={'Cannot be empty'}
                />
                <InputForm
                    inputClassName={style.password}
                    title={'Password'}
                    placeholder={'Your password'}
                    isError={false}
                    errorMessage={'Cannot be empty'}
                />
            </div>
            <FPButton />
            <SignInButton />
        </form>
    )
}