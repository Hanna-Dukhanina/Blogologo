import React, { useCallback, useState } from 'react'
import InputForm from '.'
import SignInButton from '../../ButtonSignIn/exportSignIn'
import FPButton from '../ButtonForgotPassword/exportForgotPassword'
import style from './style.module.scss'

const faceApi = {
    login: async (login: string, password: string) => {
        return login == 'admin' && password == 'admin'
    }
}
type FormType = {
    login: string
    password: string
}

export const ExportForm = () => {

    const [form, setForm] = useState({
        login: '',
        password: ''
    } as FormType)

    const handleLoginChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            login: e.currentTarget.value
        })
    }, [form])

    const handlePasswordChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            password: e.currentTarget.value
        })
    }, [form])

    const handleOnClick = useCallback(
        () => {
            faceApi.login(form.login, form.password)
                .then(result => alert(result ? 'Вы вошли' : 'Ошибка'))
        }, [form])

    return (
        <form className={style.form} >
            <div className={style.inputs}>
                <InputForm
                    inputClassName={style.email}
                    title={'Email'}
                    placeholder={'Your email'}
                    isError={false}
                    errorMessage={'Cannot be empty'}
                    onChange={handleLoginChange}
                    value={form.login}
                />
                <InputForm
                    inputClassName={style.password}
                    title={'Password'}
                    placeholder={'Your password'}
                    isError={false}
                    errorMessage={'Cannot be empty'}
                    onChange={handlePasswordChange}
                    value={form.password}
                />
            </div>
            <FPButton />
            <button onClick={handleOnClick}>
                Sign in
            </button>
        </form>
    )
}    