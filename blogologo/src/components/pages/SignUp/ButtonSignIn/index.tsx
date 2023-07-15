import React from "react"
import { Link } from "react-router-dom"
import style from './style.module.scss'

const SignInButton = () => {
    return (
        <Link to='/pageSignIn' className={style['signIn']}>Sign In</Link>
    )
}

export default SignInButton